import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoWarenkorb from '../../images/Warenkorb.png';
import { useAuth } from '../../components/authContext/AuthContext';
import CartIcon from '../cartIcon/CartIcon';


type onComponentChange = (component:String) => void;

interface NavigationProps {
  onComponentChange: onComponentChange;
}

const Navigation = () => {
  
  
const openHamMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const hamMenuElement = hamMenu as HTMLElement;
    const offScreenMenuElement = offScreenMenu as HTMLElement;

    hamMenuElement.classList.toggle('active');
    offScreenMenuElement.classList.toggle('active');
};


const navigate = useNavigate();
const { user } = useAuth();

  return (
    <div className="nav">
      <div className="off-screen-menu">
        <ul>
          <Link to="/" className="logout-link">Log Out</Link>
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
            <button className="navigation_button" onClick={() => navigate('/home')} >All Books</button>
        </div>
        {user?.role === 'admin' ? (
          <div className='navigation_item'>
            <button className="navigation_button" onClick={() => navigate('/add-book')}>Add New Book</button>
          </div>
        ) : (
          <div className='navigation_item'></div>
        )}

        <div className='navigation_item'>
          <button className="navigation_button" onClick={() => navigate('/about')} >About Us</button>
        </div>
      </ul>
    </nav>
    {user?.role === 'admin' ? (
        <div className="warenkorb"></div>
    ) : (
      <div className="warenkorb">
          <CartIcon/>
      </div>
    )}
    </div>
  );
};

export default Navigation;