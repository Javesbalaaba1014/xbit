import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'Registration failed');
        console.error('Registration error:', data);
      }
    } catch (error) {
      setError('Failed to connect to server. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1B2E] px-4">
      <div className="bg-[#2C2844] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Register for X-BIT</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-300" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full bg-[#1E1B2E] text-white rounded-lg p-3 mt-1"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-gray-300" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#1E1B2E] text-white rounded-lg p-3 mt-1"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-gray-300" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full bg-[#1E1B2E] text-white rounded-lg p-3 mt-1"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full bg-[#1E1B2E] text-white rounded-lg p-3 mt-1"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105"
          >
            Register
          </button>
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00E3A5] hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register; 