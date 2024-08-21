// components/GoogleReviews.js
'use client'
import React from 'react';

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    text: 'Excellent service and very friendly staff. Highly recommended!',
    date: '2023-06-15'
  },
  {
    name: 'Jane Smith',
    rating: 4,
    text: 'Great experience overall, though the waiting time was a bit long.',
    date: '2023-05-20'
  },
  {
    name: 'Alice Johnson',
    rating: 5,
    text: 'Fantastic place! Will definitely come back again.',
    date: '2023-04-10'
  },
  // Add more reviews here if needed
];

const GoogleReviews = () => {
  return (
    <div className="py-7 flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Google Reviews</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{review.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.292 2.198 10.708 2.198 10.951 2.927L12.89 8.518L18.858 9.632C19.635 9.784 19.891 10.74 19.308 11.296L14.885 15.352L16.011 21.246C16.17 22.051 15.317 22.633 14.601 22.248L9.999 19.822L5.399 22.248C4.683 22.633 3.83 22.051 3.989 21.246L5.115 15.352L0.692 11.296C0.109 10.74 0.365 9.784 1.142 9.632L7.109 8.518L9.049 2.927Z" />
                  </svg>
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.292 2.198 10.708 2.198 10.951 2.927L12.89 8.518L18.858 9.632C19.635 9.784 19.891 10.74 19.308 11.296L14.885 15.352L16.011 21.246C16.17 22.051 15.317 22.633 14.601 22.248L9.999 19.822L5.399 22.248C4.683 22.633 3.83 22.051 3.989 21.246L5.115 15.352L0.692 11.296C0.109 10.74 0.365 9.784 1.142 9.632L7.109 8.518L9.049 2.927Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
