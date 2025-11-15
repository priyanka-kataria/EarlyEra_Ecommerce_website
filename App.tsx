import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartView from './components/CartView';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import CheckoutView from './components/CheckoutView';
import OrderSuccessView from './components/OrderSuccessView';
import SearchBar from './components/SearchBar';
import ProductDetailView from './components/ProductDetailView';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryShowcase from './components/CategoryShowcase';
import { CartProvider } from './context/CartContext';
import { Product, Review } from './types';

export type View = 'products' | 'cart' | 'about' | 'contact' | 'checkout' | 'orderSuccess' | 'productDetail';

// API data mapping function
export const mapApiProduct = (apiProduct: any): Product => ({
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

const App: React.FC = () => {
  const [view, setView] = useState<View>('products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(['all', ...data]);
      } catch (e) {
        console.error("Could not fetch categories:", e);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = useCallback(async (currentCategory: string, currentSearchTerm: string) => {
    setLoading(true);
    setError(null);
    try {
      let url: string;
      // API search query takes precedence
      if (currentSearchTerm) {
        url = `https://dummyjson.com/products/search?q=${encodeURIComponent(currentSearchTerm)}`;
      } else if (currentCategory !== 'all') {
        url = `https://dummyjson.com/products/category/${currentCategory}`;
      } else {
        url = 'https://dummyjson.com/products?limit=12';
      }

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch products');
      }
      const data = await response.json();
      
      let fetchedProducts = data.products.map(mapApiProduct);

      // If a search term was used with a specific category, we must filter client-side
      // because the API doesn't support searching within a category.
      if (currentSearchTerm && currentCategory !== 'all') {
        fetchedProducts = fetchedProducts.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
      }
      
      setProducts(fetchedProducts);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Debounce fetching to avoid excessive API calls while typing
    const handler = setTimeout(() => {
      fetchProducts(category, searchTerm);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, category, fetchProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('productDetail');
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch(view) {
      case 'cart': return <CartView setView={setView} />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView setView={setView} />;
      case 'checkout': return <CheckoutView setView={setView} />;
      case 'orderSuccess': return <OrderSuccessView setView={setView} />;
      case 'productDetail': return selectedProduct ? <ProductDetailView product={selectedProduct} setView={setView} onProductClick={handleProductClick} /> : null;
      case 'products':
      default:
        return (
          <>
            <Hero />
            <Features />
            <CategoryShowcase setCategory={setCategory} setView={setView as (v: 'products') => void} />
            <FeaturedProducts onProductClick={handleProductClick} />
             <section id="products-section" className="py-16">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-text-main text-center">All Products</h2>
                </div>
                <ProductList 
                    products={products} 
                    loading={loading}
                    error={error}
                    onProductClick={handleProductClick}
                />
            </section>
          </>
        );
    }
  }

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <Header 
          setView={setView} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderView()}
        </main>
        <Footer setView={setView} />
      </div>
    </CartProvider>
  );
};

export default App;
