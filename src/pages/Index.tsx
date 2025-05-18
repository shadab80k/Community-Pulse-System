
import React from 'react';
import { Link } from 'react-router-dom';
import EventList from '@/components/EventList';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, MapPin, User, Search } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cp-teal-500 to-cp-teal-400 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover what's happening in your community
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Find local events, connect with neighbors, and engage with your community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="cp-button bg-white text-cp-teal-600 hover:bg-gray-100">
                Get Started
              </Link>
              <Link to="/create-event" className="cp-button bg-cp-teal-600 text-white border border-white hover:bg-cp-teal-700">
                Create Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar (Desktop) */}
      <div className="hidden md:block relative -mt-8 mb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="cp-input pl-10 h-full"
              />
            </div>
            <button className="cp-button-primary ml-4">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="cp-container">
        {/* Featured Categories */}
        <section className="mb-16">
          <h2 className="cp-title mb-8 text-center">Browse Events by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cp-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Garage Sale</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-cp-coral-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cp-coral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Sports Match</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Community Class</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Volunteer</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Exhibition</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Festival</h3>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section className="mb-16">
          <EventList events={mockEvents} />
        </section>

        {/* CTA Section */}
        <section className="bg-cp-teal-50 rounded-xl p-8 mb-16 text-center">
          <h2 className="cp-subtitle mb-4">Ready to bring people together?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Create your own event and connect with people in your community who share your interests.
          </p>
          <Link to="/create-event" className="cp-button-primary inline-block">
            Create an Event
          </Link>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="cp-title text-center mb-10">How Community Pulse Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-cp-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover</h3>
              <p className="text-gray-600">
                Find events and activities happening near you, from garage sales to community classes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-cp-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join</h3>
              <p className="text-gray-600">
                Express interest in events with a simple click and get reminders when they're about to happen.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-cp-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Meet neighbors and community members who share your interests and passions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
