import React from 'react';
import { createContext, useContext, useState, useMemo } from 'react';
import { Book } from '../../utils/interfaces/Book';

interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalAmount: number;
  itemCount: number;
}

interface CartItem {
  id: string;
  book: Book;
}

const normalizePrice = (price: string): number => {

    const cleanedPrice = price.replace(/[^0-9.]/g, '');
    const numericPrice = parseFloat(cleanedPrice);
  
    if (isNaN(numericPrice)) {
      throw new Error('Ungültiger Preis');
    }
    return numericPrice;
  };

  const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {



  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    const newCartItem: CartItem = { id: generateId(), book };
    setCart([...cart, newCartItem]);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(cart.filter(cartItem => cartItem.id !== cartItemId));
  };


  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.length;

  const totalAmount = useMemo(() => {
    return cart.reduce((total, cartItem) => total + normalizePrice(cartItem.book.price || ''), 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalAmount, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};