
import React, { useState, useEffect } from 'react';
import { User } from '@/lib/types';
import { mockUsers } from '@/lib/mock-data';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use our mock data and any added from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || 'null');
    const allUsers = storedUsers ? [...mockUsers, ...storedUsers] : mockUsers;
    setUsers(allUsers);
  }, []);

  const verifyOrganizer = (userId: string) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, isVerifiedOrganizer: true } : user
    );
    
    setUsers(updatedUsers);
    toast.success('User verified as organizer');
  };

  const removeVerification = (userId: string) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, isVerifiedOrganizer: false } : user
    );
    
    setUsers(updatedUsers);
    toast.success('Organizer verification removed');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || 'Not provided'}</TableCell>
                <TableCell>
                  {user.isVerifiedOrganizer ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Verified Organizer
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Regular User
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {!user.isVerifiedOrganizer ? (
                      <button
                        onClick={() => verifyOrganizer(user.id)}
                        className="p-1 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                        title="Verify as Organizer"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </button>
                    ) : (
                      <button
                        onClick={() => removeVerification(user.id)}
                        className="p-1 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
                        title="Remove Verification"
                      >
                        <XCircle className="h-5 w-5 text-red-600" />
                      </button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageUsers;
