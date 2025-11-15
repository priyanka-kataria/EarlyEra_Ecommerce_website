import React from 'react';
import { CheckCircle } from 'lucide-react';
import { View } from '../App';

interface OrderSuccessViewProps {
  setView: (view: View) => void;
}

const OrderSuccessView: React.FC<OrderSuccessViewProps> = ({ setView }) => {
  return (
    <div className="text-center py-20 bg-surface rounded-lg border border-border-color">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
      <h2 className="mt-6 text-2xl font-bold text-text-main">Thank You for Your Order!</h2>
      <p className="mt-2 text-text-secondary">Your order has been placed successfully. A confirmation email has been sent.</p>
      <button
        onClick={() => setView('products')}
        className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors duration-300"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccessView;