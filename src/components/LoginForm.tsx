
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { mockUsers } from '@/lib/mock-data';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors, general: '' };
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Login form submitted:', formData);
      
      // Check if admin login
      if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
        // Store admin authentication in localStorage
        localStorage.setItem('user', JSON.stringify({
          id: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          isAdmin: true
        }));
        toast.success('Admin login successful!');
        navigate('/admin/dashboard');
        return;
      }

      // Check if user exists (mock authentication)
      const user = mockUsers.find(user => user.email === formData.email);
      if (user && formData.password === 'password') { // Simple mock password
        // Store user authentication in localStorage
        localStorage.setItem('user', JSON.stringify({
          ...user,
          isAdmin: false
        }));
        toast.success('Login successful!');
        navigate('/');
      } else {
        setErrors({
          ...errors,
          general: 'Invalid email or password',
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="cp-title text-center mb-6">Welcome Back</h2>
      
      {errors.general && (
        <div className="mb-4 p-3 bg-cp-coral-50 border border-cp-coral-300 text-cp-coral-600 rounded-md">
          {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`cp-input pl-10 ${errors.email ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="john.doe@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-cp-coral-500">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`cp-input pl-10 ${errors.password ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="******"
            />
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-cp-coral-500">{errors.password}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-cp-teal-500 focus:ring-cp-teal-400 border-gray-300 rounded"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="text-cp-teal-500 hover:text-cp-teal-600 font-medium">
              Forgot password?
            </a>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full cp-button-primary py-3"
          >
            Log In
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-cp-teal-500 hover:text-cp-teal-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>Demo credentials:</p>
        <p>Email: demo@example.com | Password: password</p>
        <p>Admin: admin@example.com | Password: admin123</p>
      </div>
    </div>
  );
};

export default LoginForm;
