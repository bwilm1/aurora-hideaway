import React, { useState } from 'react';

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      category: 'hotel',
      title: 'Hotel Exterior',
      description: 'The Aurora Hideaway nestled among the trees',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      category: 'rooms',
      title: 'Northern Light Suite',
      description: 'Our premium suite with panoramic views',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      category: 'dining',
      title: 'Aurora Restaurant',
      description: 'Fine dining with a view',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      category: 'wellness',
      title: 'Forest View Hot Pools',
      description: 'Relax in our outdoor heated pools',
      image: 'https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      category: 'surroundings',
      title: 'Northern Lights',
      description: 'The aurora borealis visible from our property',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      category: 'rooms',
      title: 'The Forest King',
      description: 'Spacious room with forest views',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      category: 'dining',
      title: 'The Wilderness Café',
      description: 'Casual dining throughout the day',
      image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      category: 'wellness',
      title: 'Spa Treatment Room',
      description: 'Relaxing treatments with forest views',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 9,
      category: 'hotel',
      title: 'Lobby',
      description: 'Our welcoming reception area',
      image: 'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 10,
      category: 'surroundings',
      title: 'Winter Forest',
      description: 'The magical winter landscape surrounding our hotel',
      image: 'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 11,
      category: 'rooms',
      title: 'The Stargazer Cabin',
      description: 'Private cabin with glass ceiling',
      image: 'https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 12,
      category: 'dining',
      title: 'Starlight Lounge',
      description: 'Evening cocktails and small plates',
      image: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 13,
      category: 'wellness',
      title: 'Aurora Sauna',
      description: 'Traditional sauna with glass roof',
      image: 'https://images.pexels.com/photos/5628256/pexels-photo-5628256.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 14,
      category: 'hotel',
      title: 'Hotel at Night',
      description: 'The Aurora Hideaway illuminated under the stars',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 15,
      category: 'surroundings',
      title: 'Summer Forest',
      description: 'The lush summer landscape around our hotel',
      image: 'https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 16,
      category: 'rooms',
      title: 'The Aurora Twin',
      description: 'Comfortable room with two queen beds',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 17,
      category: 'dining',
      title: 'Private Igloo Dining',
      description: 'Unique dining experience under the stars',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 18,
      category: 'wellness',
      title: 'Yoga Studio',
      description: 'Morning yoga with forest views',
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'dining', name: 'Dining' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'surroundings', name: 'Surroundings' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative h-80 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">Explore The Aurora Hideaway through our images</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display text-primary-900 mb-4">Our Visual Journey</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of images showcasing the beauty of our hotel, rooms, dining experiences, wellness facilities, and the stunning natural surroundings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.id
                  ? 'bg-secondary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => openLightbox(image)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-primary-900 mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                  onClick={closeLightbox}
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-white">
                  <h3 className="text-xl font-display">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download Brochure */}
        <div className="mt-16 bg-primary-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-display text-primary-900 mb-4">Download Our Brochure</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Want to see more? Download our digital brochure with additional images and information about The Aurora Hideaway.
          </p>
          <button className="btn-primary">Download Brochure (PDF)</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
