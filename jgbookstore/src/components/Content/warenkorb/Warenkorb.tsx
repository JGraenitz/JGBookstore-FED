import React from 'react';
import './Warenkorb.css'; 
//import { useCart } from '../../cartContext/CartProvider';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { removeFromCart, clearCart, selectCart, selectTotalAmount } from '../../../redux/cartSlice';


const CartPage: React.FC = () => {
  //const { cart, totalAmount, removeFromCart, clearCart } = useCart();

  //const navigate = useNavigate();

 /* const handleCheckout = () => {
    clearCart()
    navigate("/checkout")
  };  without REDUX*/

  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    handleClearCart();
    navigate("/checkout");
  };
 

  return (
    <div className="container">
      <div className="cart">
        <h1>Warenkorb</h1>
        <ul className="cart-items">
          {cart.map(cartItem => (
            <li key={cartItem.id} className="cart-item">
              <span className="item-details">
                "{cartItem.book.title}" by {cartItem.book.author} - {cartItem.book.price}
              </span>
              <button onClick={() => handleRemoveFromCart(cartItem.id)} className="remove-button">
                Entfernen
              </button>
            </li>
          ))}
        </ul>
        <div className="total">
          <p>Gesamtsumme:</p>
          <strong>{totalAmount}$</strong>
        </div>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;