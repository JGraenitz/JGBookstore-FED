import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Content from './components/Content/Content';
import { AuthProvider } from './components/authContext/AuthContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './components/cartContext/CartProvider';


const LoginScreen: React.FC = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);

const LoggedInLayout: React.FC = () => (
  <>
    <Navigation />
    <Header />
    <Content />
    <Footer />
  </>
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<LoginScreen />}
            />
            <Route
              path="/*"
              element={<LoggedInLayout />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);



//<Navigation onComponentChange={handleComponentChange} />
//{currentComponent === 'Content' ? <Content /> : <Content2 />}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
