// src/components/Booking/BookingSystem.js
import React, { useState } from 'react';
import SeatMap from './SeatMap';
import BookingSummary from './BookingSummary';

const BookingSystem = ({ movieData }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);

  return (
    <div className="booking-system">
      {step === 1 ? (
        <SeatMap 
          onSeatSelect={setSelectedSeats} 
          selectedSeats={selectedSeats}
          onNext={() => setStep(2)}
        />
      ) : (
        <BookingSummary 
          selectedSeats={selectedSeats}
          onBack={() => setStep(1)}
        />
      )}
    </div>
  );
};

export default BookingSystem;