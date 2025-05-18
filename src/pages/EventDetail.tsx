
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, Clock, MapPin, User, Share2, Heart, Users, Mail, Phone } from 'lucide-react';
import { format } from 'date-fns';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id);
  
  const [attendeeForm, setAttendeeForm] = useState({
    name: '',
    email: '',
    phone: '',
    additionalAttendees: 0,
  });
  
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAttendeeForm({
      ...attendeeForm,
      [name]: name === 'additionalAttendees' ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Attendance form submitted:', attendeeForm);
    setFormSubmitted(true);
    setShowForm(false);
  };

  if (!event) {
    return (
      <div className="cp-container py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="cp-button-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="cp-container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Event Header */}
          <div className="mb-6">
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-sm text-cp-teal-500 hover:text-cp-teal-600">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-sm text-gray-500 md:ml-2">Events</span>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-sm text-gray-500 md:ml-2 truncate max-w-[200px]">{event.title}</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-y-2 text-sm text-gray-600">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-1.5 text-cp-teal-500" />
                <span>{format(new Date(event.startDate), 'EEEE, MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center mr-6">
                <Clock className="h-4 w-4 mr-1.5 text-cp-teal-500" />
                <span>{format(new Date(event.startDate), 'h:mm a')} - {format(new Date(event.endDate), 'h:mm a')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1.5 text-cp-teal-500" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cp-teal-100 text-cp-teal-700">
                {event.category}
              </span>
            </div>
          </div>
          
          {/* Event Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            {event.imageUrl ? (
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-cp-teal-300 to-cp-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-5xl">{event.title.substring(0, 1)}</span>
              </div>
            )}
          </div>
          
          {/* Event Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Event</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="whitespace-pre-line">{event.description}</p>
            </div>
          </div>
          
          {/* Organizer */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Organizer</h2>
            <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-full bg-cp-teal-100 flex items-center justify-center text-cp-teal-500 font-bold text-xl">
                {event.organizer.name.substring(0, 1)}
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">
                  {event.organizer.name}
                  {event.organizer.isVerifiedOrganizer && (
                    <svg className="w-4 h-4 inline-block ml-1 text-cp-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </h3>
                <p className="text-sm text-gray-500">Event Organizer</p>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">{event.location}</h3>
              <div className="h-[200px] bg-gray-200 rounded-lg mb-2">
                {/* Map placeholder - in a real app, this would be an actual map */}
                <div className="h-full w-full flex items-center justify-center bg-cp-teal-50 text-cp-teal-500">
                  <MapPin className="h-8 w-8 mr-2" />
                  <span className="text-lg font-medium">Map View</span>
                </div>
              </div>
              <button className="text-cp-teal-500 text-sm font-medium hover:underline">
                Get Directions
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="h-16 w-16 bg-cp-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-cp-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">You're Going!</h3>
                <p className="text-gray-600 mb-6">
                  We've registered your interest in this event. You'll receive updates via email.
                </p>
                <button
                  className="text-cp-teal-500 hover:text-cp-teal-600 font-medium"
                  onClick={() => setFormSubmitted(false)}
                >
                  Change your RSVP
                </button>
              </div>
            ) : showForm ? (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Register for this event</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={attendeeForm.name}
                        onChange={handleInputChange}
                        className="cp-input pl-10"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={attendeeForm.email}
                        onChange={handleInputChange}
                        className="cp-input pl-10"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={attendeeForm.phone}
                        onChange={handleInputChange}
                        className="cp-input pl-10"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalAttendees" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Attendees
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="additionalAttendees"
                        name="additionalAttendees"
                        min="0"
                        value={attendeeForm.additionalAttendees}
                        onChange={handleInputChange}
                        className="cp-input pl-10"
                        placeholder="0"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Number of people coming with you
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="cp-button-primary flex-1"
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      className="cp-button-secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {format(new Date(event.startDate), 'MMM d')}
                  </h3>
                  <p className="text-gray-600">
                    {format(new Date(event.startDate), 'EEEE, h:mm a')} - {format(new Date(event.endDate), 'h:mm a')}
                  </p>
                </div>
                
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full cp-button-primary py-3 flex items-center justify-center mb-4"
                >
                  <Users className="mr-2 h-5 w-5" />
                  I'm Interested
                </button>
                
                <div className="flex gap-2 mb-6">
                  <button className="cp-button-secondary flex-1 py-2 flex items-center justify-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Save
                  </button>
                  <button className="cp-button-secondary flex-1 py-2 flex items-center justify-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </button>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-800 mb-2">Event Details</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex">
                      <Calendar className="h-5 w-5 mr-3 text-cp-teal-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Date and Time</p>
                        <p className="text-gray-600">{format(new Date(event.startDate), 'EEEE, MMMM d, yyyy')}</p>
                        <p className="text-gray-600">{format(new Date(event.startDate), 'h:mm a')} - {format(new Date(event.endDate), 'h:mm a')}</p>
                      </div>
                    </li>
                    <li className="flex">
                      <MapPin className="h-5 w-5 mr-3 text-cp-teal-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </li>
                    <li className="flex">
                      <User className="h-5 w-5 mr-3 text-cp-teal-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Organizer</p>
                        <p className="text-gray-600">{event.organizer.name}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
