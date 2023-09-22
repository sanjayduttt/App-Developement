import React, { useState } from 'react';
import "./TourPlanner.css";

function TourPlanner() {
  const [fromAddress, setFromAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [randomPlaces] = useState([
    'New York City, USA',
    'Paris, France',
    'Tokyo, Japan',
    'Sydney, Australia',
    'Rome, Italy',
    'Rio de Janeiro, Brazil',
    'Cape Town, South Africa',
    'Dubai, UAE',
    'Machu Picchu, Peru',
    'Bali, Indonesia',
  ]);

  const handleSubmit = () => {
    // You can perform validation here before proceeding to the next step
    // For simplicity, we'll assume the form is valid

    // Store the form data in an object
    const formData = {
      fromAddress,
      destination,
      startDate,
      endDate,
    };
    

    // For this example, we'll simply log the form data to the console
    console.log(formData);
    window.alert('Please Confirm Your Booking ');

    // You can navigate to the next page or perform any desired action here
  };

  return (
    <div className='ff'>
      <div className="f9">
            <span>Build Your Own Trip Plan.
              <br/>
             <h2 className='f10' >The More You Travel<br/>
              The More You Explore.</h2>
             
            </span>
            
          </div>
    <div className="f1">
    
      <h1 className='f4'>SkyTours</h1>
      <form onSubmit={handleSubmit}>
        <div className="f2">
          <label className='f3' htmlFor="fromAddress"></label>
          <input className='f6'
            type="text"
            placeholder='Enter Your Address'
            id="fromAddress"
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            required
          />
        </div>
        <div className="f2">
          <label className='f3' htmlFor="destination"></label>
          <select className='f7'
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Your Destination
            </option>
            {randomPlaces.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
        <div className="f2">
          <label htmlFor="startDate"></label>
          <input className='f6'
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="2">
          <label htmlFor="endDate"></label>
          <input className='f6'
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button className='f5' type="submit">
          Next
        </button>
      </form></div>
    </div>
  );
}

export default TourPlanner;
