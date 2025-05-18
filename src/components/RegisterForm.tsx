
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock } from 'lucide-react';
import { toast } from 'sonner';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    const newErrors = { ...errors };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would be where you'd handle registration
      console.log('Registration form submitted:', formData);
      
      // For demo purposes, simulate successful registration
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        isVerifiedOrganizer: false,
      };
      
      // Store the new user in localStorage (in a real app, this would be in a database)
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      
      // Automatically log in the new user
      localStorage.setItem('user', JSON.stringify({
        ...newUser,
        isAdmin: false
      }));
      
      toast.success('Registration successful! You are now logged in.');
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="cp-title text-center mb-6">Create an Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`cp-input pl-10 ${errors.name ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-cp-coral-500">{errors.name}</p>
          )}
        </div>
        
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="cp-input pl-10"
              placeholder="(555) 123-4567"
            />
          </div>
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
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`cp-input pl-10 ${errors.confirmPassword ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="******"
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-cp-coral-500">{errors.confirmPassword}</p>
          )}
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full cp-button-primary py-3"
          >
            Register
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-cp-teal-500 hover:text-cp-teal-600 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
