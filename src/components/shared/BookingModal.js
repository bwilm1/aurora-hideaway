import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, roomName, roomPrice }) => {
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    specialRequests: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        onClose();
        setStep(1);
        setIsSuccess(false);
        setBookingData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          adults: 1,
          children: 0,
          specialRequests: ''
        });
      }, 3000);
    }, 1500);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (!isOpen) return null;

  // Calculate minimum dates for check-in and check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const minCheckIn = formatDate(today);
  const minCheckOut = bookingData.checkIn || formatDate(tomorrow);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSuccess ? (
            <div className="text-center py-10">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-display text-primary-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for booking with The Aurora Hideaway. A confirmation email has been sent to {bookingData.email}.
              </p>
              <p className="text-gray-600">
                Booking reference: <span className="font-semibold">AH-{Math.floor(Math.random() * 10000)}</span>
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-display text-primary-900 mb-6 pr-8">
                Book {roomName || 'Your Stay'}
              </h2>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'} mr-2`}>1</div>
                  <div className={`h-1 flex-grow ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'} mr-2`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'} mr-2`}>2</div>
                  <div className={`h-1 flex-grow ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'} mr-2`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                </div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>Dates & Guests</span>
                  <span>Personal Details</span>
                  <span>Confirmation</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          min={minCheckIn}
                          value={bookingData.checkIn}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          min={minCheckOut}
                          value={bookingData.checkOut}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                        <select
                          id="adults"
                          name="adults"
                          value={bookingData.adults}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        >
                          {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                        <select
                          id="children"
                          name="children"
                          value={bookingData.children}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        >
                          {[0, 1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-display text-primary-900 mb-2">Room Summary</h3>
                      <p className="text-gray-600 mb-2">{roomName || 'Selected Room'}</p>
                      <p className="text-xl font-display text-secondary-600">
                        {roomPrice || '$399'}
                        <span className="text-sm text-gray-500">/night</span>
                      </p>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={bookingData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={bookingData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-display text-primary-900 mb-4">Booking Summary</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Room:</span>
                          <span className="font-medium">{roomName || 'Selected Room'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-in:</span>
                          <span className="font-medium">{bookingData.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-out:</span>
                          <span className="font-medium">{bookingData.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests:</span>
                          <span className="font-medium">{bookingData.adults} Adults, {bookingData.children} Children</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guest Name:</span>
                          <span className="font-medium">{bookingData.firstName} {bookingData.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Contact:</span>
                          <span className="font-medium">{bookingData.email}</span>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <div className="flex justify-between text-lg font-display">
                            <span className="text-primary-900">Total:</span>
                            <span className="text-secondary-600">{roomPrice || '$399'} × 
                              {bookingData.checkIn && bookingData.checkOut ? 
                                ` ${Math.max(1, Math.floor((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24)))} nights` : 
                                ' 1 night'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                          I agree to the <a href="#" className="text-primary-600 hover:underline">terms and conditions</a> and <a href="#" className="text-primary-600 hover:underline">privacy policy</a>.
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Confirm Booking'}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
