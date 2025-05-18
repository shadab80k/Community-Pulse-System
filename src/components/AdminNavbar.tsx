
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Calendar, Users, Settings } from 'lucide-react';
import { toast } from 'sonner';

const AdminNavbar: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/login');
  };
  
  return (
    <div className="bg-gray-900 text-white h-screen w-64 fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <Link to="/admin/dashboard" className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cp-teal-400 to-cp-teal-600 flex items-center justify-center">
            <span className="text-white font-bold">CP</span>
          </div>
          <span className="ml-3 text-lg font-bold">Admin Panel</span>
        </Link>
      </div>
      
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <LayoutDashboard className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/events" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <Calendar className="h-5 w-5 mr-3" />
              Manage Events
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/users" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <Users className="h-5 w-5 mr-3" />
              Manage Users
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/settings" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <button 
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-gray-300 hover:text-white w-full"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
