
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import { AlertTriangle } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, error, onProductClick }) => {

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-red-50 border border-red-200 text-red-700 rounded-lg">
        <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
        <h3 className="mt-4 text-2xl font-bold">Failed to load products</h3>
        <p className="mt-2">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
     return (
        <div className="text-center py-20 bg-accent rounded-lg">
          <h3 className="text-2xl font-bold text-text-main">No Products Found</h3>
          <p className="mt-2 text-text-secondary">Try adjusting your search or category filters.</p>
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

export default ProductList;
