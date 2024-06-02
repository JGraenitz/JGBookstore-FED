import React from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingPage.css'

const LoadingPage: React.FC = () => {
  return (
    <div>
      <h2>Loading</h2>
      <p>.........</p>
    </div>
  );
};

export default LoadingPage;