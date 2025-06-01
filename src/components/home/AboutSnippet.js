import React from 'react';

const AboutSnippet = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display text-primary-900">
              A Sanctuary in the Heart of Nature
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nestled in a pristine wilderness where the northern lights dance across the sky, 
              The Aurora Hideaway offers an unparalleled retreat from the ordinary. Our boutique 
              hotel combines luxurious comfort with the raw beauty of nature, creating an 
              experience that speaks to both body and soul.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each detail has been carefully curated to enhance your connection with the 
              surrounding landscape while providing the ultimate in comfort and elegance. 
              From our panoramic suites to our world-class amenities, every aspect of your 
              stay is designed to create unforgettable memories.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-display text-secondary-600 mb-2">24</div>
                <div className="text-sm text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-secondary-600 mb-2">4.9</div>
                <div className="text-sm text-gray-600">Guest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-secondary-600 mb-2">15</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Aurora Hideaway exterior"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-900 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
