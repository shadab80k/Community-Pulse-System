
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      // Redirect based on user role
      if (user.isAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  return (
    <div className="cp-container py-12">
      <LoginForm />
    </div>
  );
};

export default Login;
