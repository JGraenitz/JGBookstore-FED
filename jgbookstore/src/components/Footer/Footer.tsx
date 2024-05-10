import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} JGBookstore. Alle Rechte vorbehalten.
        </p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">
                Impressum
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">
                Datenschutz
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;