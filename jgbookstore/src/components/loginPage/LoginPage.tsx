import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login as loginService} from '../../utils/scripts/API'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
import './LoginPage.css'

const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const auth = useAuth();

    const navigate = useNavigate();


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await loginService(email, password);
          auth.login(response.user);
          setMessage(`User with role: ${response.user.role}`)
          navigate('/home')
        } catch (error) {
          setMessage('Login failed: Incorrect email or password');
        }
      };

      
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
      
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
      

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Anmelden</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;