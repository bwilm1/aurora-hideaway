import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../shared/BookingModal';

const FeaturedRooms = () => {
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
  const featuredRooms = [
    {
      id: 1,
      name: 'The Northern Light Suite',
      description: 'Experience the magic of the aurora from your private panoramic window.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$599',
      features: ['Panoramic Views', 'King Bed', 'Private Balcony'],
    },
    {
      id: 2,
      name: 'The Forest King',
      description: 'Immerse yourself in nature with floor-to-ceiling windows overlooking the forest.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$499',
      features: ['Forest View', 'King Bed', 'Fireplace'],
    },
    {
      id: 3,
      name: 'The Stargazer Cabin',
      description: 'A private cabin with a glass ceiling for stargazing from your bed.',
      image: 'https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$699',
      features: ['Glass Ceiling', 'Private Cabin', 'Hot Tub'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-primary-900 mb-4">
            Featured Accommodations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after rooms, each offering a unique blend of luxury and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
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
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, index) => (
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

        <div className="text-center mt-12">
          <Link to="/rooms" className="btn-primary">
            View All Rooms
          </Link>
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
                  <Link to="/rooms" className="btn-secondary">
                    View All Rooms
                  </Link>
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
    </section>
  );
};

export default FeaturedRooms;
