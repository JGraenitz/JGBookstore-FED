import React from 'react';
import './Navigation.css';
import logoWarenkorb from '../../images/Warenkorb.png';

type onComponentChange = (component:String) => void;

interface NavigationProps {
  onComponentChange: onComponentChange;
}

const Navigation = ({ onComponentChange } : NavigationProps) => {
  const handleButtonClick = (component:String) => {
    onComponentChange(component);
  };
  
const openHamMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const hamMenuElement = hamMenu as HTMLElement;
    const offScreenMenuElement = offScreenMenu as HTMLElement;

    hamMenuElement.classList.toggle('active');
    offScreenMenuElement.classList.toggle('active');
};

  return (
    <div className="nav">
      <div className="off-screen-menu">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
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
            <button className="navigation_button" onClick={() => handleButtonClick('Content')}>Alle Bücher</button>
        </div>
        <div className='navigation_item'>
          <button className="navigation_button" onClick={() => handleButtonClick('Content2')}>Bücher kleiner 5$</button>
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