// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../utils/Interfaces/Book';

interface CartItem {
  id: string;
  book: Book;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const normalizePrice = (price: string): number => {
  const cleanedPrice = price.replace(/[^0-9.]/g, '');
  const numericPrice = parseFloat(cleanedPrice);

  if (isNaN(numericPrice)) {
    throw new Error('Ungültiger Preis');
  }
  return numericPrice;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const newCartItem: CartItem = { id: generateId(), book: action.payload };
      state.cart.push(newCartItem);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload);
    },
    clearCart: state => {
      state.cart = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state: { cart: CartState }) => state.cart.cart;

export const selectItemCount = (state: { cart: CartState }) => state.cart.cart.length;

export const selectTotalAmount = (state: { cart: CartState }) => 
  state.cart.cart.reduce((total, cartItem) => total + normalizePrice(cartItem.book.price || ''), 0);

export default cartSlice.reducer;
