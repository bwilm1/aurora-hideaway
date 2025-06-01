import React from 'react';
import { Link } from 'react-router-dom';

const BottomCTA = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom text-center text-white">
        <h2 className="text-3xl md:text-4xl font-display mb-6">
          Plan Your Perfect Escape
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Experience the magic of the aurora borealis from the comfort of your luxury suite. 
          Book your stay today and create memories that will last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/rooms" className="btn-primary">
            Book Your Stay
          </Link>
          <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-primary-900">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
