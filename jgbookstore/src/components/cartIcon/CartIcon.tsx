import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../images/Warenkorb.png'; // Pfad zu deinem Warenkorb-Icon
import { selectItemCount } from '../../redux/cartSlice'; // Importiere den Selektor
import './CartIcon.css';

const CartIcon = () => {
  const itemCount = useSelector(selectItemCount);
  const navigate = useNavigate();

  return (
    <div className="cart-icon-container" onClick={() => navigate('/warenkorb')}>
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;