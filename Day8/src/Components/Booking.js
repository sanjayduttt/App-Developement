import React, { useState } from "react";
import "./Booking.css";

function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numPersons, setNumPersons] = useState("");
  const [roomType, setRoomType] = useState(""); // New state for room type

  // Function to update check-in time in AM/PM format
  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  // Function to handle room type selection
  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  return (
    <div className="bookingContainer">
      <div className="bookingContainerForm">
        <form className="Booking-Form">
          <h1>Booking Page</h1>
          <label className="Booking-label">Name: </label>
          <input
            className="Booking-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
          <br />

          <label className="Booking-label">Email: </label>
          <input
            className="Booking-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <br />

          <label className="Booking-label">Check-In Date and Time: </label>
          <input
            className="Booking-input"
            type="datetime-local"
            value={checkIn}
            onChange={handleCheckInChange}
            required
          />
          <br />

          <label className="Booking-label">Check-Out Date and Time: </label>
          <input
            className="Booking-input"
            type="datetime-local"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <br />

          <label className="Booking-label">Number of Persons: </label>
          <input
            className="Booking-input"
            type="number"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
            placeholder="Enter the number of persons"
            required
          />
          <br />

          {/* New field for selecting room type */}
          <label className="Booking-label">Room Type: </label>
          <select
            className="Booking-input1"
            value={roomType}
            onChange={handleRoomTypeChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="standard">Standard Room</option>
            <option value="dual">Dual Room</option>
          </select>
          <br />

          <button className="Booking-Button" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;