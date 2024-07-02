import React from 'react';
import './Checkout.css'; 
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-message">
        <h1>Thank you for shopping...</h1>
      </div>
    </div>
  );
};

export default Checkout;