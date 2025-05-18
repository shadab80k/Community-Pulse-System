
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventCategory } from '@/lib/types';
import { eventCategories } from '@/lib/mock-data';
import { Calendar, MapPin, Info, Clock } from 'lucide-react';

const CreateEvent: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '' as EventCategory | '',
    location: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    imageFile: null as File | null,
    imagePreview: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Validate title
    if (!formData.title.trim()) {
      newErrors.title = 'Event name is required';
      isValid = false;
    }
    
    // Validate description
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }
    
    // Validate category
    if (!formData.category) {
      newErrors.category = 'Please select a category';
      isValid = false;
    }
    
    // Validate location
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }
    
    // Validate start date and time
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
      isValid = false;
    }
    
    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
      isValid = false;
    }
    
    // Validate end date and time
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
      isValid = false;
    }
    
    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
      isValid = false;
    }
    
    // Check if end date/time is after start date/time
    const startDateTime = new Date(`${formData.startDate}T${formData.startTime}`);
    const endDateTime = new Date(`${formData.endDate}T${formData.endTime}`);
    
    if (endDateTime <= startDateTime) {
      newErrors.endDate = 'End date/time must be after start date/time';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would be where you'd handle form submission
      console.log('Event form submitted:', formData);
      // Redirect or show success message
      alert('Event created successfully! It will be reviewed and published soon.');
    }
  };
  
  // Get today's date in YYYY-MM-DD format for min attribute of date inputs
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="cp-container py-8">
      <div className="mb-6">
        <h1 className="cp-title mb-2">Create a New Event</h1>
        <p className="text-gray-600">
          Fill in the details below to create your community event. Your event will be reviewed before it's published.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Event Name*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`cp-input ${errors.title ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="Give your event a clear, descriptive name"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-cp-coral-500">{errors.title}</p>
            )}
          </div>
          
          {/* Event Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`cp-input ${errors.category ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
            >
              <option value="">Select a category</option>
              {eventCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-cp-coral-500">{errors.category}</p>
            )}
          </div>
          
          {/* Event Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-1.5 text-cp-teal-500" />
                Start Date and Time*
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm text-gray-600 mb-1">Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    min={today}
                    className={`cp-input ${errors.startDate ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-cp-coral-500">{errors.startDate}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="startTime" className="block text-sm text-gray-600 mb-1">Time</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className={`cp-input ${errors.startTime ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
                  />
                  {errors.startTime && (
                    <p className="mt-1 text-sm text-cp-coral-500">{errors.startTime}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-1.5 text-cp-teal-500" />
                End Date and Time*
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="endDate" className="block text-sm text-gray-600 mb-1">Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    min={formData.startDate || today}
                    className={`cp-input ${errors.endDate ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-cp-coral-500">{errors.endDate}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="endTime" className="block text-sm text-gray-600 mb-1">Time</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className={`cp-input ${errors.endTime ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
                  />
                  {errors.endTime && (
                    <p className="mt-1 text-sm text-cp-coral-500">{errors.endTime}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <MapPin className="h-4 w-4 mr-1.5 text-cp-teal-500" />
              Location*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`cp-input ${errors.location ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="Enter the venue name and address"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-cp-coral-500">{errors.location}</p>
            )}
          </div>
          
          {/* Event Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Info className="h-4 w-4 mr-1.5 text-cp-teal-500" />
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={formData.description}
              onChange={handleChange}
              className={`cp-input ${errors.description ? 'border-cp-coral-400 focus:border-cp-coral-400 focus:ring-cp-coral-200' : ''}`}
              placeholder="Provide details about your event. What can attendees expect? Are there things they should bring or know beforehand?"
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-cp-coral-500">{errors.description}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              You can format your text with line breaks.
            </p>
          </div>
          
          {/* Event Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Image (Optional)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              {formData.imagePreview ? (
                <div className="text-center">
                  <img 
                    src={formData.imagePreview} 
                    alt="Event preview" 
                    className="mx-auto h-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="mt-2 text-sm text-cp-coral-500 hover:text-cp-coral-600"
                    onClick={() => setFormData({...formData, imageFile: null, imagePreview: ''})}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="imageFile"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-cp-teal-500 hover:text-cp-teal-600"
                    >
                      <span>Upload a file</span>
                      <input
                        id="imageFile"
                        name="imageFile"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="cp-button-primary py-2.5"
            >
              Create Event
            </button>
            <Link to="/" className="cp-button-secondary py-2.5 text-center">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      
      {/* Tips Section */}
      <div className="bg-cp-teal-50 rounded-lg p-5">
        <h3 className="font-semibold text-gray-800 mb-2">Tips for Creating a Successful Event</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Be clear and specific about what attendees can expect</li>
          <li>• Include all important details (time, location, requirements)</li>
          <li>• Add a compelling image to attract more interest</li>
          <li>• Consider making your event recurring if it happens regularly</li>
        </ul>
      </div>
    </div>
  );
};

export default CreateEvent;
