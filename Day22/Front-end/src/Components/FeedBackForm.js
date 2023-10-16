import React, { Component } from 'react';
import './FeedBackForm.css';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server.
    // For now, let's just log the data.
    console.log(this.state);
  };

  render() {
    return (
      <div className='Feedback'>
        <div className='Feedback-con'>
        <h2 className='Feedback-h2'>Feedback Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className='Feedback-label'>First Name:</label>
            <input className='Feedback-input'
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder='Enter First_Name'
              required
            />
          </div>
          <div>
            <label className='Feedback-label' >Last Name:</label>
            <input className='Feedback-input'
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder='Enter Last_Name'
              required
            />
          </div>
          <div>
            <label className='Feedback-label'>Email:</label>
            <input className='Feedback-input'
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder='Enter Email'
              required
            />
          </div>
          <div>
            <label className='Feedback-label'>Comment:</label>
            <textarea className='Feedback-textarea'
              name="comment"
              value={this.state.comment}
              onChange={this.handleInputChange}
              placeholder='Start typing.......'
              required
            />
          </div>
          <button className='Feedback-Button' type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
