import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="container-custom space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            The Aurora Hideaway
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Where luxury meets the wild, under the dancing lights of the aurora
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/rooms" className="btn-primary">
              Explore Rooms
            </Link>
            <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-primary-900">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
