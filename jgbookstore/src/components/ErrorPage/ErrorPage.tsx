import React from 'react';
import { useLocation } from 'react-router-dom';
import './ErrorPage.css'
import  ErrorPageProps  from '../../utils/Interfaces/ErrorPageProps'

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div className="error-container">
      <h2>Error:</h2>
      <p className="ErrorMessage">{error?.message}</p>
    </div>
  );
};

export default ErrorPage;