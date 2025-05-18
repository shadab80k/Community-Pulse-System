
import React, { useState } from 'react';
import EventCard from './EventCard';
import { Event } from '@/lib/types';
import { Search } from 'lucide-react';
import { eventCategories } from '@/lib/mock-data';

interface EventListProps {
  events: Event[];
  title?: string;
}

const EventList: React.FC<EventListProps> = ({ events, title = 'Upcoming Events' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Filter events based on search term and selected category
  const filteredEvents = events.filter((event) => {
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-6 space-y-3 md:space-y-0 md:items-center">
        <h2 className="cp-title">{title}</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            className="cp-input pl-10 w-full md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          <button
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              selectedCategory === ''
                ? 'bg-cp-teal-400 text-white'
                : 'bg-white border border-cp-teal-300 text-cp-teal-600 hover:bg-cp-teal-50'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            All Events
          </button>
          {eventCategories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category.value
                  ? 'bg-cp-teal-400 text-white'
                  : 'bg-white border border-cp-teal-300 text-cp-teal-600 hover:bg-cp-teal-50'
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="text-cp-teal-500 mb-2">
            <svg className="mx-auto h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">No events found</h3>
          <p className="text-gray-500">Try changing your search criteria or check back later</p>
        </div>
      )}
    </div>
  );
};

export default EventList;
