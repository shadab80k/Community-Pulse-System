
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Pending Events</h2>
          <p className="text-3xl font-bold text-cp-teal-500">3</p>
          <p className="text-gray-500 mt-2">Events awaiting approval</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Events</h2>
          <p className="text-3xl font-bold text-cp-teal-500">24</p>
          <p className="text-gray-500 mt-2">Active events in the platform</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Registered Users</h2>
          <p className="text-3xl font-bold text-cp-teal-500">156</p>
          <p className="text-gray-500 mt-2">Total user accounts</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-cp-teal-500 mr-3"></div>
            <div>
              <p className="text-gray-800">New event submitted: "Community Cleanup Day"</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-cp-teal-500 mr-3"></div>
            <div>
              <p className="text-gray-800">New user registered: "Michael Smith"</p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-cp-teal-500 mr-3"></div>
            <div>
              <p className="text-gray-800">Event approved: "Local Art Exhibition"</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
