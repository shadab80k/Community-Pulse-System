
import { Event, EventCategory, User } from './types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '555-123-4567',
    isVerifiedOrganizer: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@example.com',
    phone: '555-987-6543',
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.p@example.com',
    phone: '555-456-7890',
    isVerifiedOrganizer: true,
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'jwilson@example.com',
    phone: '555-789-0123',
  },
];

// Create events with appropriate dates (future dates)
const today = new Date();
const createFutureDate = (daysToAdd: number, hours = 10, minutes = 0): Date => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysToAdd);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

// Mock Events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Garage Sale',
    description: 'Join us for our annual community garage sale! Find great deals on furniture, clothing, toys, and more. All proceeds go to the neighborhood improvement fund.',
    category: 'Garage Sale',
    location: '123 Main Street, Neighborhood Park',
    startDate: createFutureDate(3, 8, 0),
    endDate: createFutureDate(3, 15, 0),
    imageUrl: 'https://images.unsplash.com/photo-1558558285-059a3a3ebd94',
    organizer: mockUsers[0],
    isApproved: true,
  },
  {
    id: '2',
    title: 'Neighborhood Tennis Tournament',
    description: 'Test your skills at our friendly neighborhood tennis tournament. All skill levels welcome! Refreshments provided.',
    category: 'Sports Match',
    location: 'Community Tennis Courts, 456 Park Ave',
    startDate: createFutureDate(7, 9, 0),
    endDate: createFutureDate(7, 17, 0),
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0',
    organizer: mockUsers[1],
    isApproved: true,
  },
  {
    id: '3',
    title: 'Free Yoga in the Park',
    description: 'Start your weekend with a rejuvenating yoga session in the park. Bring your own mat and water. Suitable for all levels.',
    category: 'Community Class',
    location: 'Sunset Park, East Lawn',
    startDate: createFutureDate(5, 8, 30),
    endDate: createFutureDate(5, 10, 0),
    imageUrl: 'https://images.unsplash.com/photo-1599447292180-45fd84092ef4',
    organizer: mockUsers[2],
    isApproved: true,
  },
  {
    id: '4',
    title: 'River Cleanup Drive',
    description: "Help keep our local river clean! We'll provide gloves, bags, and tools. Volunteers of all ages welcome. Community service certificates available for students.",
    category: 'Volunteer Opportunity',
    location: 'Riverside Park, North Entrance',
    startDate: createFutureDate(10, 9, 0),
    endDate: createFutureDate(10, 13, 0),
    imageUrl: 'https://images.unsplash.com/photo-1618477462146-058d219a6f8d',
    organizer: mockUsers[3],
    isApproved: true,
  },
  {
    id: '5',
    title: 'Local Artists Exhibition',
    description: 'Discover amazing talents in our community! This exhibition showcases paintings, sculptures, and digital art from local artists of all ages.',
    category: 'Exhibition',
    location: 'Community Center Gallery, 789 Arts Ave',
    startDate: createFutureDate(15, 10, 0),
    endDate: createFutureDate(18, 19, 0),
    imageUrl: 'https://images.unsplash.com/photo-1594097849960-72108de2c00f',
    organizer: mockUsers[0],
    isApproved: true,
  },
  {
    id: '6',
    title: 'Summer Solstice Festival',
    description: 'Celebrate the longest day of the year with music, food, crafts, and activities for the whole family. Special performances by local musicians at sunset.',
    category: 'Festival/Celebration',
    location: 'Central Commons, Downtown',
    startDate: createFutureDate(20, 16, 0),
    endDate: createFutureDate(20, 22, 0),
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    organizer: mockUsers[2],
    isApproved: true,
  },
];

// Categories with their respective icons
export const eventCategories: { value: EventCategory; label: string }[] = [
  { value: 'Garage Sale', label: 'Garage Sale' },
  { value: 'Sports Match', label: 'Sports Match' },
  { value: 'Community Class', label: 'Community Class' },
  { value: 'Volunteer Opportunity', label: 'Volunteer Opportunity' },
  { value: 'Exhibition', label: 'Exhibition' },
  { value: 'Festival/Celebration', label: 'Festival/Celebration' },
];
