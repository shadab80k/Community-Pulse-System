
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is admin
    const userString = localStorage.getItem('user');
    if (!userString) {
      navigate('/login');
      return;
    }
    
    const user = JSON.parse(userString);
    if (!user.isAdmin) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="ml-64 flex-grow">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
