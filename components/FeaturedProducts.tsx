
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import { mapApiProduct } from '../App';
import { AlertTriangle } from 'lucide-react';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dummyjson.com/products?limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch featured products');
        }
        const data = await response.json();
        setProducts(data.products.map(mapApiProduct));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      );
    }

    if (error) {
       return (
        <div className="text-center py-10 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            <AlertTriangle className="mx-auto h-8 w-8 text-red-500" />
            <h3 className="mt-2 text-xl font-bold">Could not load picks</h3>
            <p className="mt-1 text-sm">{error}</p>
        </div>
        );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
        ))}
      </div>
    );
  };

  return (
    <section className="my-16 bg-accent p-8 rounded-lg">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text-main">Top Picks For You</h2>
            <p className="text-text-secondary mt-2">Curated selections of our best-selling and highest-rated products.</p>
        </div>
        {renderContent()}
    </section>
  );
};

export default FeaturedProducts;
