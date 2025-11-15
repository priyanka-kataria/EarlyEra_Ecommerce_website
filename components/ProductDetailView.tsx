
import React, { useState, useEffect } from 'react';
import { Product, Review } from '../types';
import { useCart } from '../hooks/useCart';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { View } from '../App';

// API data mapping function
const mapApiProduct = (apiProduct: any): Product => ({
  id: apiProduct.id,
  name: apiProduct.title,
  category: apiProduct.category,
  brand: apiProduct.brand,
  price: apiProduct.price,
  stock: apiProduct.stock,
  description: apiProduct.description,
  image: apiProduct.thumbnail,
  rating: apiProduct.rating,
  images: apiProduct.images,
  reviews: apiProduct.reviews?.map((r: any): Review => ({
    rating: r.rating,
    comment: r.comment,
    date: new Date(r.date).toLocaleDateString(),
    reviewerName: r.reviewerName,
  })) || [],
});

interface ProductDetailViewProps {
  product: Product;
  setView: (view: View) => void;
  onProductClick: (product: Product) => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, setView, onProductClick }) => {
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loadingRelated, setLoadingRelated] = useState(true);
    
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    useEffect(() => {
        setSelectedImage(product.image);
        setRelatedProducts([]);

        const fetchRelated = async () => {
            setLoadingRelated(true);
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${product.category}`);
                 if (!response.ok) throw new Error('Failed to fetch related products');
                const data = await response.json();
                const filtered = data.products
                    .map(mapApiProduct)
                    .filter((p: Product) => p.id !== product.id)
                    .slice(0, 3);
                setRelatedProducts(filtered);
            } catch (e) {
                console.error("Failed to fetch related products:", e);
            } finally {
                setLoadingRelated(false);
            }
        };
        fetchRelated();
    }, [product]);

    return (
        <div className="animate-fade-in">
            <button 
                onClick={() => setView('products')}
                className="flex items-center gap-2 text-text-secondary hover:text-primary mb-8 font-semibold transition-colors"
            >
                <ArrowLeft className="h-5 w-5" />
                Back to Products
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-border-color p-4 mb-4">
                        <img src={selectedImage} alt={product.name} className="w-full h-96 object-contain" />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {product.images.slice(0, 5).map((img, index) => (
                            <div 
                                key={index} 
                                className={`rounded-md border-2 p-1 cursor-pointer transition-all ${selectedImage === img ? 'border-primary' : 'border-border-color hover:border-sky-300'}`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-16 object-cover rounded-sm" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <span className="text-primary font-semibold capitalize mb-2">{product.category.replace(/-/g, ' ')}</span>
                    <h1 className="text-4xl font-bold text-text-main">{product.name}</h1>
                    <div className="my-4">
                        <StarRating rating={product.rating} reviewCount={product.reviews.length} />
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-6">{product.description}</p>
                    <div className="mt-auto">
                        <p className="text-4xl font-extrabold text-text-main mb-6">${product.price.toFixed(2)}</p>
                        <button
                            onClick={handleAddToCart}
                            disabled={isAdded}
                            className={`w-full flex items-center justify-center py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-300 ${isAdded ? 'bg-green-500' : 'bg-gradient-to-r from-primary to-sky-400 hover:from-primary-hover hover:to-sky-500'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                        >
                            {isAdded ? (
                                <>
                                    <Check className="h-6 w-6 mr-2" /> Added to Cart
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="h-6 w-6 mr-2" /> Add to Cart
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-16 pt-12 border-t border-border-color">
                <h2 className="text-3xl font-bold text-text-main mb-8">Customer Reviews</h2>
                {product.reviews && product.reviews.length > 0 ? (
                    <div className="space-y-6">
                        {product.reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-accent rounded-lg">
                        <p className="text-text-secondary">No reviews yet for this product.</p>
                    </div>
                )}
            </div>

            {/* Related Products */}
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-text-main mb-8 text-center">You might also like</h2>
                {loadingRelated ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                ) : relatedProducts.length > 0 ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map(related => (
                            <ProductCard key={related.id} product={related} onProductClick={onProductClick} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-text-secondary">No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetailView;