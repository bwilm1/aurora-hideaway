import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative h-80 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">We're here to help with your questions and reservations</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-display text-primary-900 mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject*
                </label>
                <select
                  id="subject"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Please select</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="information">General Information</option>
                  <option value="feedback">Feedback</option>
                  <option value="special">Special Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the privacy policy and consent to having my data processed.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-display text-primary-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Address</h3>
                    <p className="text-gray-600">
                      The Aurora Hideaway<br />
                      123 Forest Road<br />
                      Northern Wilderness, NW 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Phone</h3>
                    <p className="text-gray-600">
                      Reservations: (555) 123-4567<br />
                      Front Desk: (555) 123-4568<br />
                      Spa: (555) 123-4569
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900">Email</h3>
                    <p className="text-gray-600">
                      Reservations: reservations@aurorahideaway.com<br />
                      General Inquiries: info@aurorahideaway.com<br />
                      Spa: spa@aurorahideaway.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-display text-primary-900 mb-6">Hours of Operation</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-primary-900">Front Desk</h3>
                  <p className="text-gray-600">Open 24 hours</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-primary-900">Reservations Office</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM<br />Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-primary-900">Spa</h3>
                  <p className="text-gray-600">Daily: 9:00 AM - 9:00 PM</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-primary-900">Aurora Restaurant</h3>
                  <p className="text-gray-600">Dinner: 6:00 PM - 10:00 PM</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-primary-900">The Wilderness Café</h3>
                  <p className="text-gray-600">Daily: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-display text-primary-900 mb-6">Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 h-96 bg-gray-200 rounded">
              {/* This would be replaced with an actual map component in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-display text-primary-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-primary-900 mb-2">What are your check-in and check-out times?</h3>
                <p className="text-gray-600">Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-primary-900 mb-2">Is breakfast included with the room rate?</h3>
                <p className="text-gray-600">Yes, a complimentary breakfast is included with all room rates. Breakfast is served at The Wilderness Café from 7:00 AM to 10:30 AM daily.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-primary-900 mb-2">Do you offer airport transfers?</h3>
                <p className="text-gray-600">Yes, we offer airport transfers for an additional fee. Please contact our reservations team to arrange transportation.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-primary-900 mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">Our standard cancellation policy allows free cancellation up to 7 days before arrival. Cancellations made within 7 days of arrival may be subject to a charge of one night's stay.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-primary-900 mb-2">Is there parking available?</h3>
                <p className="text-gray-600">Yes, we offer complimentary parking for all guests. Valet parking is also available for an additional fee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
