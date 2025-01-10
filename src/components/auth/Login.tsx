import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to connect to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1B2E] px-4">
      <div className="bg-[#2C2844] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Login to X-BIT</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105"
          >
            Login
          </button>
          <p className="text-center text-gray-300 mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#00E3A5] hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login; 