
import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Check } from 'lucide-react';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div 
      className="bg-surface rounded-lg overflow-hidden border border-border-color shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative overflow-hidden">
        <img className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src={product.image} alt={product.name} />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full capitalize">{product.category.replace(/-/g, ' ')}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-main mb-2">{product.name}</h3>
        <div className="mb-4">
             <StarRating rating={product.rating} reviewCount={product.reviews.length} />
        </div>
        <p className="text-text-secondary text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-extrabold text-text-main">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center w-40 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${isAdded ? 'bg-green-500' : 'bg-gradient-to-r from-primary to-sky-400 hover:from-primary-hover hover:to-sky-500'}`}
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <Check className="h-5 w-5 mr-2" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;