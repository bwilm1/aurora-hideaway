import React from 'react';
import Hero from '../components/home/Hero';
import AboutSnippet from '../components/home/AboutSnippet';
import FeaturedRooms from '../components/home/FeaturedRooms';
import AmenitiesHighlights from '../components/home/AmenitiesHighlights';
import Testimonial from '../components/home/Testimonial';
import BottomCTA from '../components/home/BottomCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <FeaturedRooms />
      <AmenitiesHighlights />
      <Testimonial />
      <BottomCTA />
    </>
  );
};

export default HomePage;
