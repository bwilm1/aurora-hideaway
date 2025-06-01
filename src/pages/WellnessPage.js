import React from 'react';

const WellnessPage = () => {
  const treatments = [
    {
      id: 1,
      name: 'Northern Light Massage',
      description: 'A deeply relaxing massage inspired by the dancing aurora, using aromatic oils infused with local herbs to release tension and promote wellbeing.',
      duration: '60 / 90 min',
      price: '$120 / $180',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Forest Therapy Facial',
      description: 'A rejuvenating facial treatment using organic products derived from Nordic forest botanicals, designed to nourish and revitalize your skin.',
      duration: '60 min',
      price: '$140',
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Midnight Sun Body Wrap',
      description: 'A purifying full-body treatment that begins with gentle exfoliation followed by a warm mineral-rich wrap to detoxify and hydrate.',
      duration: '90 min',
      price: '$190',
      image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: 'Arctic Stone Therapy',
      description: 'Hot and cold stone therapy inspired by the Arctic landscape, designed to improve circulation and ease muscle tension.',
      duration: '75 min',
      price: '$160',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const facilities = [
    {
      id: 1,
      name: 'Aurora Sauna',
      description: 'Our glass-roofed sauna offers the unique experience of enjoying the traditional Nordic sauna ritual while gazing at the stars and northern lights.',
      image: 'https://images.pexels.com/photos/5628256/pexels-photo-5628256.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Forest View Hot Pools',
      description: 'Outdoor heated pools nestled among the trees, offering a peaceful retreat where you can soak while enjoying the natural surroundings.',
      image: 'https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Relaxation Lounge',
      description: 'A tranquil space with panoramic views, comfortable loungers, and a selection of herbal teas to enjoy before or after your treatments.',
      image: 'https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: 'Fitness Center',
      description: 'A fully-equipped gym with cardio and strength training equipment, plus a studio for yoga and meditation sessions.',
      image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const classes = [
    {
      id: 1,
      name: 'Forest Yoga',
      description: 'Connect with nature through yoga sessions held in our glass pavilion overlooking the forest.',
      schedule: 'Daily at 8:00 AM',
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: 'Mindfulness Meditation',
      description: 'Guided meditation sessions focused on presence and connection with the natural world.',
      schedule: 'Mon, Wed, Fri at 7:00 PM',
      image: 'https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: 'Nordic Walking',
      description: 'Guided walking tours through the surrounding nature, combining exercise with exploration.',
      schedule: 'Tue, Thu, Sat at 10:00 AM',
      image: 'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative h-80 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Wellness & Spa</h1>
            <p className="text-xl max-w-2xl mx-auto">Reconnect with nature and yourself</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display text-primary-900 mb-4">Our Wellness Philosophy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At The Aurora Hideaway, we believe in the healing power of nature. Our wellness offerings are designed to help you reconnect with the natural world and with yourself, promoting balance and rejuvenation for body and mind.
          </p>
        </div>

        {/* Spa Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-primary-900 mb-4">The Northern Spa</h3>
              <p className="text-gray-600 mb-4">
                Nestled among the trees with panoramic views of the surrounding landscape, our spa is a sanctuary of peace and natural beauty. Our treatments draw inspiration from Nordic wellness traditions and the healing properties of local botanicals.
              </p>
              <p className="text-gray-600 mb-4">
                Each treatment room features floor-to-ceiling windows that connect you with the natural world outside, while our skilled therapists customize each experience to your individual needs.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Organic Products</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Local Botanicals</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Nordic Traditions</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">Personalized Care</span>
              </div>
            </div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Spa treatment room with forest view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Spa Treatments */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-primary-900 mb-4">Signature Treatments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our carefully crafted treatments combine ancient wisdom with modern techniques to provide a truly transformative experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <div 
                key={treatment.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="font-display text-xl text-primary-900 mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{treatment.duration}</span>
                    </div>
                    <span className="font-display text-secondary-600">{treatment.price}</span>
                  </div>
                  <button className="btn-secondary w-full">Book Treatment</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Facilities */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-primary-900 mb-4">Wellness Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our range of wellness facilities are designed to enhance your stay and provide spaces for relaxation and rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <div 
                key={facility.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Classes */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-primary-900 mb-4">Wellness Classes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our daily wellness activities to enhance your stay and connect with nature and yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <div 
                key={cls.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary-900 mb-2">
                    {cls.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{cls.description}</p>
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">{cls.schedule}</span>
                  </div>
                  <button className="btn-secondary w-full">Reserve Spot</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-primary-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-display text-primary-900 mb-2">Spa Reservations</h3>
            <p className="text-gray-600">
              We recommend booking your spa treatments in advance to ensure availability.
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
              <p className="text-gray-600">spa@aurorahideaway.com</p>
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

export default WellnessPage;
