
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="inline-block bg-cp-teal-100 p-6 rounded-full text-cp-teal-500 mb-6">
          <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We can't find the page you're looking for</p>
        <Link to="/" className="cp-button-primary inline-flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
