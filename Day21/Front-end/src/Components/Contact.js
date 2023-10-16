import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      mobile: '', 
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (
        <div className='mmk'>
            <h2 className='Contact-h2'>Leave a Message</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label className='contact-label' htmlFor="first_name">First Name:</label>
            <input className='Contact-input'
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder='Enter First_Name'
              required
            />
          </div>
  
          <div className="contact-form-group">
            <label className='contact-label' htmlFor="last_name">Last Name:</label>
            <input className='Contact-input'
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder='Enter Last_Name'
              required
            />
          </div>
  
          <div className="contact-form-group">
            <label className='contact-label' htmlFor="email">Email Id:</label>
            <input className='Contact-input'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter EmailId'
              required
            />
          </div>
  
          <div className="contact-form-group">
            <label className='contact-label' htmlFor="mobile">Mobile No:</label>
            <input className='Contact-input'
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder='Enter Mobile Number'
              required
            />
          </div>
  
          <div className="contact-form-group">
            <label className='contact-label' htmlFor="message">Message:</label>
            <textarea className='Contact-Message'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Start Leaving A Message '
              required
            ></textarea>
          </div>
  
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div></div>
    );
  }

export default Contact;
