import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} JGBookstore. All rights reserved.
        </p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/about" className="footer__nav-link">
                Imprint
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/" className="footer__nav-link">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;