import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItemComponent from './CartItem';
import CartSummary from './CartSummary';
import { ShoppingCart } from 'lucide-react';
import { View } from '../App';

interface CartViewProps {
  setView: (view: View) => void;
}

const CartView: React.FC<CartViewProps> = ({ setView }) => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 bg-accent rounded-lg">
        <ShoppingCart className="mx-auto h-16 w-16 text-text-secondary" />
        <h2 className="mt-6 text-2xl font-bold text-text-main">Your cart is empty</h2>
        <p className="mt-2 text-text-secondary">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={() => setView('products')}
          className="mt-6 bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors duration-300"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-text-main mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-surface border border-border-color rounded-lg p-4 space-y-4">
          {cartItems.map(item => (
            <CartItemComponent key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <CartSummary setView={setView} />
        </div>
      </div>
    </div>
  );
};

export default CartView;