import React from 'react';
import { CartItem } from '../types';
import { useCart } from '../hooks/useCart';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center bg-background p-4 rounded-lg border border-border-color transition-all duration-300">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-grow ml-4">
        <h3 className="font-bold text-lg text-text-main">{item.name}</h3>
        <p className="text-sm text-text-secondary">{item.brand}</p>
        <p className="text-lg font-semibold text-text-main mt-2">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-border-color rounded-lg">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-2 text-text-secondary hover:bg-accent rounded-l-lg transition-colors disabled:opacity-50"
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-3 text-text-main font-medium">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-2 text-text-secondary hover:bg-accent rounded-r-lg transition-colors disabled:opacity-50"
            disabled={item.quantity >= item.stock}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;