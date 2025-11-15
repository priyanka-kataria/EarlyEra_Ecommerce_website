import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const TAX_RATE = 0.08;
const SHIPPING_FEE = 15.00;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing cart items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, Math.min(quantity, item.stock));
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }, []);
  
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + tax + shipping;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    subtotal,
    tax,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};