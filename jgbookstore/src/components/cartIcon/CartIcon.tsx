import React from 'react';
import { useCart } from '../cartContext/CartProvider';
import cartIcon from '../../images/Warenkorb.png'; // Pfad zu deinem Warenkorb-Icon
import { useNavigate } from 'react-router-dom';
import './CartIcon.css';

const CartIcon = () => {
  const { itemCount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-icon-container" onClick={() => navigate('/warenkorb')}>
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;