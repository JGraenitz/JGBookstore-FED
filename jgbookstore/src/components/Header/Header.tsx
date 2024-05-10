import React from 'react';
import './Header.css'; // Import der CSS-Datei für die Stile
import logo from '../../images/logo.png';



function Header() {
  return (
    <header className="header">
      <div className="header_logo">
          <img src={logo} alt="JGBookstore Logo" className="header_logo-img" />
      </div>
    </header>
  );
}

export default Header;