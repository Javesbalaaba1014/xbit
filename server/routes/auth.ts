import express, { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Op } from 'sequelize';

const router = express.Router();

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface LoginBody {
  email: string;
  password: string;
}

const register: RequestHandler<{}, {}, RegisterBody> = async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    
    const { username, email, password, confirmPassword } = req.body;

    console.log('Parsed fields:', {
      username,
      email,
      password: Boolean(password)
    });

    // Input validation with detailed logging
    const missingFields = {
      username: !username,
      email: !email,
      password: !password
    };
    
    console.log('Missing fields:', missingFields);

    if (!username || !email || !password) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missing: missingFields
      });
    }

    // Log the received data (remove in production)
    console.log('Registration attempt:', {
      username,
      email,
      passwordLength: password.length
    });

    // Check if user exists
    const existingUser = await User.findOne({ 
      where: { 
        [Op.or]: [
          { email: email },
          { username: username }
        ]
      } 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists',
        field: existingUser.email === email ? 'email' : 'username'
      });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
      const user = await User.create({
        username,
        email,
        password: hashedPassword
      });
      
      console.log('User created:', user.id);
      return res.status(201).json({ 
        success: true,
        message: 'Account created successfully! You can now login.',
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } catch (createError: any) {
      console.error('User creation error:', createError);
      return res.status(400).json({ 
        success: false,
        message: 'Failed to create account',
        errors: createError.errors?.map((e: any) => ({
          field: e.path,
          message: e.message
        }))
      });
    }

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const login: RequestHandler<{}, {}, LoginBody> = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

router.post('/register', register);
router.post('/login', login);

export default router; 