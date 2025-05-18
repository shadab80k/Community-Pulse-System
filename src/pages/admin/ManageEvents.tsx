
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Event } from '@/lib/types';
import { mockEvents } from '@/lib/mock-data';
import { toast } from 'sonner';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ManageEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [pendingEvents, setPendingEvents] = useState<Event[]>([]);
  const [approvedEvents, setApprovedEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending');

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use our mock data
    const storedEvents = JSON.parse(localStorage.getItem('events') || 'null') || mockEvents;
    setEvents(storedEvents);
    
    // Filter events based on approval status
    const pending = storedEvents.filter((event: Event) => !event.isApproved);
    const approved = storedEvents.filter((event: Event) => event.isApproved);
    
    setPendingEvents(pending);
    setApprovedEvents(approved);
  }, []);

  const approveEvent = (eventId: string) => {
    const updatedEvents = events.map(event => 
      event.id === eventId ? { ...event, isApproved: true } : event
    );
    
    // Update localStorage and state
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    
    // Update filtered lists
    const pending = updatedEvents.filter(event => !event.isApproved);
    const approved = updatedEvents.filter(event => event.isApproved);
    setPendingEvents(pending);
    setApprovedEvents(approved);
    
    toast.success('Event approved successfully');
  };

  const rejectEvent = (eventId: string) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    
    // Update localStorage and state
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    
    // Update filtered lists
    const pending = updatedEvents.filter(event => !event.isApproved);
    const approved = updatedEvents.filter(event => event.isApproved);
    setPendingEvents(pending);
    setApprovedEvents(approved);
    
    toast.success('Event rejected and removed');
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>
      
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('pending')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-cp-teal-500 text-cp-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pending Approval ({pendingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'approved'
                ? 'border-cp-teal-500 text-cp-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Approved Events ({approvedEvents.length})
          </button>
        </nav>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Organizer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              {activeTab === 'pending' && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(activeTab === 'pending' ? pendingEvents : approvedEvents).length > 0 ? (
              (activeTab === 'pending' ? pendingEvents : approvedEvents).map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{event.category}</TableCell>
                  <TableCell>{event.organizer.name}</TableCell>
                  <TableCell>{formatDate(event.startDate)}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  {activeTab === 'pending' && (
                    <TableCell>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => approveEvent(event.id)}
                          className="p-1 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                          title="Approve Event"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </button>
                        <button
                          onClick={() => rejectEvent(event.id)}
                          className="p-1 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
                          title="Reject Event"
                        >
                          <XCircle className="h-5 w-5 text-red-600" />
                        </button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={activeTab === 'pending' ? 6 : 5} className="text-center py-8">
                  No {activeTab === 'pending' ? 'pending' : 'approved'} events found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageEvents;
