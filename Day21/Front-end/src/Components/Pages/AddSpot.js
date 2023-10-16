import React, { useState } from 'react';
import axios from 'axios';
import './Addspot.css';

const TouristSpotForm = () => {
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData={
        placeName:placeName,
        description:description,
        image:image
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/save', formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Spot-con'>
    <div className='spot-container'>
      <h1 className='Spot-h1'>Add a Tourist Spot</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className='spot-label'>Place Name:</label>
          <input className='spot-input'
            type="text"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='spot-label'>Description:</label>
          <textarea className='spot-input'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='spot-label'>Image:</label>
          <input className='spot-input'
            type="text"
            onChange={(e) =>setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='spot-button' type="submit">Submit</button>
        </div>
      </form>
    </div></div>
  );
};

export default TouristSpotForm;
