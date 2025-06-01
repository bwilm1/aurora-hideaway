import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-primary-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl font-display text-gray-800 mb-8">
            "An extraordinary escape into nature's embrace. The Aurora Hideaway 
            offered us the perfect blend of luxury and wilderness. Watching the 
            northern lights from our suite was a once-in-a-lifetime experience we'll 
            never forget."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Sarah Johnson"
            />
            <div className="text-left">
              <div className="font-display text-primary-900">Sarah Johnson</div>
              <div className="text-gray-600 text-sm">Travel Enthusiast</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
