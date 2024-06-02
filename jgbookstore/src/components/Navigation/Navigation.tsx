import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoWarenkorb from '../../images/Warenkorb.png';


type onComponentChange = (component:String) => void;

interface NavigationProps {
  onComponentChange: onComponentChange;
}

const Navigation = ({ onComponentChange } : NavigationProps) => {
  
  
const openHamMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const hamMenuElement = hamMenu as HTMLElement;
    const offScreenMenuElement = offScreenMenu as HTMLElement;

    hamMenuElement.classList.toggle('active');
    offScreenMenuElement.classList.toggle('active');
};


const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="off-screen-menu">
        <ul>
          <Link to="/about">About</Link>
        </ul>
      </div>  
    <nav className="navigation">
      <ul className="navigation_list"> 
        <div className='navigation_item'>
          <div className="ham-menu" onClick={openHamMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='navigation_item'>
            <button className="navigation_button" onClick={() => navigate('/')} >All Books</button>
        </div>
        <div className='navigation_item'>
          <button className="navigation_button" onClick={() => navigate('/add-book')}>Add New Book</button>
        </div>
        <div className='navigation_item'>
          <button className="navigation_button" onClick={() => navigate('/about')} >About Us</button>
        </div>
      </ul>
    </nav>
      <div className="warenkorb">
          <img src={logoWarenkorb} alt="Warenkorb Icon" className="warenkorb-img" />
      </div>
    </div>
  );
};

export default Navigation;