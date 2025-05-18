
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plus, LogIn, UserPlus } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cp-teal-500 to-cp-teal-300 flex items-center justify-center">
                <span className="text-white font-bold">CP</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Community Pulse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-cp-teal-600 bg-cp-teal-50' 
                  : 'text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/create-event" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/create-event') 
                  ? 'text-cp-teal-600 bg-cp-teal-50' 
                  : 'text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50'
              }`}
            >
              Create Event
            </Link>
            <div className="border-l border-gray-200 h-6 mx-2"></div>
            <Link 
              to="/login" 
              className="cp-button-secondary text-sm flex items-center"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Log In
            </Link>
            <Link
              to="/register"
              className="cp-button-primary text-sm flex items-center"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 space-y-1 pb-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-cp-teal-600 bg-cp-teal-50' 
                  : 'text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/create-event" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/create-event') 
                  ? 'text-cp-teal-600 bg-cp-teal-50' 
                  : 'text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Create Event
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link 
              to="/login" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Log In
            </Link>
            <Link 
              to="/register" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cp-teal-600 hover:bg-cp-teal-50"
              onClick={() => setIsOpen(false)}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
