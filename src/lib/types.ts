
export type EventCategory = 
  | 'Garage Sale' 
  | 'Sports Match' 
  | 'Community Class' 
  | 'Volunteer Opportunity' 
  | 'Exhibition' 
  | 'Festival/Celebration';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  isVerifiedOrganizer?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  location: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
  organizer: User;
  attendees?: Attendee[];
  isApproved?: boolean;
}

export interface Attendee {
  id: string;
  userId?: string;
  name: string;
  email: string;
  phone?: string;
  additionalAttendees: number;
}
