import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../shared/BookingModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl text-primary-900">
            The Aurora Hideaway
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-900">Home</Link>
            <Link to="/rooms" className="text-gray-600 hover:text-primary-900">Rooms</Link>
            <Link to="/dining" className="text-gray-600 hover:text-primary-900">Dining</Link>
            <Link to="/wellness" className="text-gray-600 hover:text-primary-900">Wellness</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-primary-900">Gallery</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-900">Contact</Link>
            <button className="btn-primary" onClick={() => setShowBookingModal(true)}>Book Now</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden pb-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-primary-900">Home</Link>
            <Link to="/rooms" className="text-gray-600 hover:text-primary-900">Rooms</Link>
            <Link to="/dining" className="text-gray-600 hover:text-primary-900">Dining</Link>
            <Link to="/wellness" className="text-gray-600 hover:text-primary-900">Wellness</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-primary-900">Gallery</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-900">Contact</Link>
            <button className="btn-primary w-full" onClick={() => setShowBookingModal(true)}>Book Now</button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        roomName="Your Perfect Stay"
        roomPrice="From $399"
      />
    </nav>
  );
};

export default Navbar;
