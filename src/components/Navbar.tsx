import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-[#1E1B2E] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold hover:text-[#00E3A5]">X-BIT</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#00E3A5]">Home</Link>
              {user && (
                <Link to="/investment" className="text-gray-300 hover:text-[#00E3A5]">
                  My Investment
                </Link>
              )}
              <Link to="/learn" className="text-gray-300 hover:text-[#00E3A5]">Learn</Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              EN
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-gray-300">
                  Welcome, <span className="text-[#00E3A5]">{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="relative bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/register" 
                  className="text-gray-300 hover:text-[#00E3A5]"
                >
                  Register
                </Link>
                <button 
                  onClick={() => navigate('/login')}
                  className="relative bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 