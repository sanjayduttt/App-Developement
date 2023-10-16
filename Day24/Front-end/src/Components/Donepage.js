import React from "react";
import "./Donepage.css"; 
import done from './Images/done.png';

const PaymentConfirmation = () => {
  return (
    <div className="payment-confirmation">
      
      <h1>Your Booking is Confirmed</h1>
    <img src={done} alt=" "/>
      <h2><p>Thank you for your payment.</p></h2>
    </div>
  );
};

export default PaymentConfirmation;