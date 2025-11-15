import React from 'react';
import { useCart } from '../hooks/useCart';
import { View } from '../App';

interface CartSummaryProps {
  setView: (view: View) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ setView }) => {
  const { subtotal, tax, total, shipping } = useCart();

  return (
    <div className="bg-surface border border-border-color rounded-lg p-6 shadow-sm sticky top-24">
      <h2 className="text-xl font-bold text-text-main mb-6 border-b border-border-color pb-4">Order Summary</h2>
      <div className="space-y-4 text-text-secondary">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-text-main">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium text-text-main">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span className="font-medium text-text-main">${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-border-color">
        <div className="flex justify-between items-center text-lg font-bold text-text-main">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button 
        onClick={() => setView('checkout')}
        className="w-full mt-8 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;