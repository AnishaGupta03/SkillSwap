import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaSearch, 
  FaUser, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes,
  FaGraduationCap,
  FaComments,
  FaCalendarAlt
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/skills', label: 'Skills', icon: FaSearch },
    ...(isAuthenticated ? [
      { path: '/dashboard', label: 'Dashboard', icon: FaGraduationCap },
      { path: '/sessions', label: 'Sessions', icon: FaCalendarAlt },
      { path: '/chat', label: 'Chat', icon: FaComments },
    ] : []),
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              >
                <FaGraduationCap className="text-white text-sm" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">SkillSwap</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaUser className="w-4 h-4" />
                  <span className="text-sm font-medium">{user?.name || 'Profile'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {isAuthenticated ? (
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaUser className="w-4 h-4" />
                  <span>{user?.name || 'Profile'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 