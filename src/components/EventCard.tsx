
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '@/lib/types';
import { Calendar, MapPin, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="cp-card overflow-hidden">
      <Link to={`/events/${event.id}`}>
        <div className="relative h-48 overflow-hidden">
          {event.imageUrl ? (
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-cp-teal-300 to-cp-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{event.title.substring(0, 1)}</span>
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white/90 py-1 px-3 rounded-full text-sm font-medium text-cp-teal-600">
            {event.category}
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/events/${event.id}`} className="hover:text-cp-teal-500 transition-colors">
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{event.title}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{event.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-1.5">
          <Calendar className="h-4 w-4 mr-1.5 text-cp-teal-500" />
          <span>
            {formatDistanceToNow(new Date(event.startDate), { addSuffix: true })}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-1.5">
          <MapPin className="h-4 w-4 mr-1.5 text-cp-teal-500" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <User className="h-4 w-4 mr-1.5 text-cp-teal-500" />
          <span>{event.organizer.name}</span>
          {event.organizer.isVerifiedOrganizer && (
            <svg className="w-4 h-4 ml-1 text-cp-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
