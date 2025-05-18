
import React, { useState } from 'react';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifyNewEvents: true,
    notifyNewUsers: true,
    autoApproveVerifiedOrganizers: false,
    emailNotifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save these settings to an API
    console.log('Settings saved:', settings);
    toast.success('Settings saved successfully');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configure when you want to be notified about platform activity
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="notifyNewEvents"
                    name="notifyNewEvents"
                    type="checkbox"
                    checked={settings.notifyNewEvents}
                    onChange={handleChange}
                    className="h-4 w-4 text-cp-teal-600 focus:ring-cp-teal-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="notifyNewEvents" className="font-medium text-gray-700">
                    New Event Notifications
                  </label>
                  <p className="text-gray-500">Get notified when a new event is submitted</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="notifyNewUsers"
                    name="notifyNewUsers"
                    type="checkbox"
                    checked={settings.notifyNewUsers}
                    onChange={handleChange}
                    className="h-4 w-4 text-cp-teal-600 focus:ring-cp-teal-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="notifyNewUsers" className="font-medium text-gray-700">
                    New User Notifications
                  </label>
                  <p className="text-gray-500">Get notified when a new user registers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="autoApproveVerifiedOrganizers"
                    name="autoApproveVerifiedOrganizers"
                    type="checkbox"
                    checked={settings.autoApproveVerifiedOrganizers}
                    onChange={handleChange}
                    className="h-4 w-4 text-cp-teal-600 focus:ring-cp-teal-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="autoApproveVerifiedOrganizers" className="font-medium text-gray-700">
                    Auto-approve Verified Organizers
                  </label>
                  <p className="text-gray-500">Automatically approve events from verified organizers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="emailNotifications"
                    name="emailNotifications"
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="h-4 w-4 text-cp-teal-600 focus:ring-cp-teal-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="emailNotifications" className="font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <p className="text-gray-500">Receive notifications via email</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="cp-button-primary"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
