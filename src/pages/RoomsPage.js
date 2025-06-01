import React, { useState } from 'react';
import BookingModal from '../components/shared/BookingModal';

const RoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingRoom, setBookingRoom] = useState(null);
  
  const openRoomDetails = (room) => {
    setSelectedRoom(room);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeRoomDetails = () => {
    setSelectedRoom(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const openBookingModal = (room) => {
    setBookingRoom(room);
  };

  const closeBookingModal = () => {
    setBookingRoom(null);
  };
  const rooms = [
    {
      id: 1,
      name: 'The Northern Light Suite',
      description: 'Experience the magic of the aurora from your private panoramic window. Our premium suite offers unparalleled views of the night sky, a luxurious king-sized bed, and a private balcony perfect for stargazing.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$599',
      features: ['Panoramic Views', 'King Bed', 'Private Balcony', 'Minibar', 'Spa Bathroom', 'Room Service'],
      size: '75 m²',
      capacity: '2 adults',
    },
    {
      id: 2,
      name: 'The Forest King',
      description: 'Immerse yourself in nature with floor-to-ceiling windows overlooking the forest. This spacious room features a cozy fireplace, premium amenities, and a private terrace where you can enjoy your morning coffee surrounded by nature.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$499',
      features: ['Forest View', 'King Bed', 'Fireplace', 'Private Terrace', 'Luxury Toiletries', 'Coffee Station'],
      size: '60 m²',
      capacity: '2 adults',
    },
    {
      id: 3,
      name: 'The Stargazer Cabin',
      description: 'A private cabin with a glass ceiling for stargazing from your bed. This unique accommodation offers the perfect blend of privacy and luxury, with your own hot tub and a dedicated host to ensure your stay is unforgettable.',
      image: 'https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$699',
      features: ['Glass Ceiling', 'Private Cabin', 'Hot Tub', 'King Bed', 'Dedicated Host', 'Champagne Service'],
      size: '85 m²',
      capacity: '2 adults',
    },
    {
      id: 4,
      name: 'The Aurora Twin',
      description: 'Perfect for families or friends, this comfortable room features two queen beds and large windows to enjoy the northern lights. Modern amenities and thoughtful design make this room both practical and luxurious.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$449',
      features: ['Two Queen Beds', 'Aurora Views', 'Spacious Bathroom', 'Work Desk', 'Smart TV', 'Bluetooth Speakers'],
      size: '55 m²',
      capacity: '4 guests',
    },
    {
      id: 5,
      name: 'The Wilderness Suite',
      description: 'Our most secluded accommodation, nestled at the edge of the forest with panoramic views of the mountains. This suite offers ultimate privacy with luxury amenities and a private outdoor space.',
      image: 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$649',
      features: ['Mountain Views', 'King Bed', 'Private Deck', 'Outdoor Shower', 'Fireplace', 'Premium Minibar'],
      size: '80 m²',
      capacity: '2 adults',
    },
    {
      id: 6,
      name: 'The Deluxe Family Room',
      description: 'Spacious and comfortable, our family room offers a king bed and two twin beds, perfect for families. Enjoy thoughtful amenities and enough space for everyone to relax after a day of adventure.',
      image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$549',
      features: ['King Bed + Two Twin Beds', 'Family Bathroom', 'Game Console', 'Kitchenette', 'Dining Area', 'Children\'s Amenities'],
      size: '90 m²',
      capacity: '4-5 guests',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative h-80 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Rooms & Suites</h1>
            <p className="text-xl max-w-2xl mx-auto">Experience luxury and comfort with stunning views of nature</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display text-primary-900 mb-4">Find Your Perfect Retreat</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Each of our rooms is uniquely designed to provide the ultimate comfort while connecting you with the natural beauty that surrounds us. From panoramic aurora views to private forest cabins, find the perfect space for your stay.
          </p>
        </div>

        {/* Room Filters - Just for show, not functional */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-secondary-600 text-white py-2 px-4 rounded-md hover:bg-secondary-700 transition-colors">
                Search Availability
              </button>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Size: {room.size}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Capacity: {room.capacity}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display text-secondary-600">
                    {room.price}
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <button
                    onClick={() => openRoomDetails(room)}
                    className="btn-secondary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Information */}
        <div className="mt-16 bg-primary-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-primary-900 mb-4">Booking Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Check-in time: 3:00 PM - 10:00 PM
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Check-out time: 11:00 AM
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Breakfast included with all bookings
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Free cancellation up to 7 days before arrival
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Special rates for stays of 5+ nights
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-4">For special requests or group bookings, please contact our reservations team directly.</p>
              <button className="btn-primary">Contact Reservations</button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingRoom !== null}
        onClose={closeBookingModal}
        roomName={bookingRoom?.name}
        roomPrice={bookingRoom?.price}
      />

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeRoomDetails}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Room image */}
              <div className="h-72 md:h-96 w-full">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Room content */}
              <div className="p-6">
                <h2 className="text-3xl font-display text-primary-900 mb-2">{selectedRoom.name}</h2>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-display text-secondary-600">
                    {selectedRoom.price}
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                      {selectedRoom.size}
                    </span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                      {selectedRoom.capacity}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedRoom.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-display text-primary-900 mb-3">Room Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedRoom.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-display text-primary-900 mb-2">Check-in / Check-out</h3>
                    <p className="text-gray-600">Check-in: 3:00 PM - 10:00 PM<br />Check-out: 11:00 AM</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-display text-primary-900 mb-2">Cancellation Policy</h3>
                    <p className="text-gray-600">Free cancellation up to 7 days before arrival</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="btn-secondary">
                    <svg className="h-5 w-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={() => openBookingModal(selectedRoom)}
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
