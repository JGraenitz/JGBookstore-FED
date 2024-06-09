import React from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingPage.css'

const LoadingPage: React.FC = () => {
  return (
    <div className="loading-container">
      <h2>Loading</h2>
      <div className="loading-bar"></div>
    </div>
  );
};

export default LoadingPage;