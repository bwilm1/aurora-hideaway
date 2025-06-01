import React from 'react';

const DiningPage = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Aurora Restaurant',
      description: 'Our signature fine dining restaurant offering Nordic-inspired cuisine with locally sourced ingredients.',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      hours: 'Dinner: 6:00 PM - 10:00 PM',
      cuisine: 'Nordic-Inspired Fine Dining',
    },
    {
      id: 2,
      name: 'The Wilderness Café',
      description: 'A casual café serving breakfast, lunch, and light bites throughout the day with panoramic views of the forest.',
      image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800',
      hours: 'Daily: 7:00 AM - 6:00 PM',
      cuisine: 'International Café Cuisine',
    },
    {
      id: 3,
      name: 'Starlight Lounge',
      description: 'An elegant bar offering craft cocktails, fine wines, and small plates perfect for evening relaxation.',
      image: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
      hours: 'Daily: 4:00 PM - 12:00 AM',
      cuisine: 'Craft Cocktails & Small Plates',
    },
  ];

  const specialExperiences = [
    {
      id: 1,
      name: 'Private Igloo Dining',
      description: 'Experience a magical dinner for two in your private glass igloo under the stars and northern lights.',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Forest Picnic',
      description: 'Enjoy a gourmet picnic basket in a secluded forest location, prepared by our chefs.',
      image: 'https://images.pexels.com/photos/6092576/pexels-photo-6092576.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Chef\'s Table Experience',
      description: 'An exclusive dining experience at our chef\'s table with a personalized tasting menu.',
      image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative h-80 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Dining Experiences</h1>
            <p className="text-xl max-w-2xl mx-auto">Culinary excellence inspired by nature</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display text-primary-900 mb-4">Our Restaurants & Bars</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At The Aurora Hideaway, we believe dining is an integral part of your experience. Our culinary team crafts exceptional dishes using the finest local ingredients, creating memorable meals that celebrate the flavors of the region.
          </p>
        </div>

        {/* Restaurants */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                    <span className="text-sm text-gray-600">{restaurant.cuisine}</span>
                  </div>
                </div>
                <button className="btn-secondary w-full">View Menu</button>
              </div>
            </div>
          ))}
        </div>

        {/* Culinary Philosophy Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-primary-900 mb-4">Our Culinary Philosophy</h3>
              <p className="text-gray-600 mb-4">
                Our cuisine celebrates the rich bounty of local ingredients, with a focus on sustainable and seasonal produce. Our executive chef works closely with local farmers, foragers, and fishermen to source the finest ingredients.
              </p>
              <p className="text-gray-600 mb-4">
                Drawing inspiration from Nordic traditions while incorporating global influences, our menus change with the seasons to reflect the freshest available produce and to provide our guests with new culinary experiences.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Farm-to-Table</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Seasonal</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Sustainable</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Locally Sourced</span>
              </div>
            </div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Special Dining Experiences */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-primary-900 mb-4">Special Dining Experiences</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Create unforgettable memories with our unique dining experiences, designed to showcase the beauty of our natural surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialExperiences.map((experience) => (
              <div 
                key={experience.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary-900 mb-2">
                    {experience.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <button className="btn-primary w-full">Book Experience</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Information */}
        <div className="bg-primary-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-display text-primary-900 mb-2">Make a Reservation</h3>
            <p className="text-gray-600">
              Reservations are recommended for Aurora Restaurant and our special dining experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <svg className="h-12 w-12 text-secondary-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h4 className="font-display text-lg text-primary-900 mb-2">By Phone</h4>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="h-12 w-12 text-secondary-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="font-display text-lg text-primary-900 mb-2">By Email</h4>
              <p className="text-gray-600">dining@aurorahideaway.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="h-12 w-12 text-secondary-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="font-display text-lg text-primary-900 mb-2">Online</h4>
              <button className="btn-secondary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningPage;
