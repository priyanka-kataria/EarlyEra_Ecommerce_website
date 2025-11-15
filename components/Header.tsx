import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { View } from '../App';
import SearchBar from './SearchBar';

interface HeaderProps {
  setView: (view: View) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];
}

const Header: React.FC<HeaderProps> = ({ setView, searchTerm, setSearchTerm, category, setCategory, categories }) => {
  const { cartCount } = useCart();
  const navItems = ['Products', 'About', 'Contact'];

  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border-color">
      <div className="bg-text-main text-center py-2">
        <p className="text-xs sm:text-sm text-background tracking-wider">Free shipping on orders over $100</p>
      </div>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer shrink-0" onClick={() => setView('products')}>
                <Sparkles className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold text-text-main">EarlyEra</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                <a
                    key={item}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setView(item.toLowerCase() as View) }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
                >
                    {item.toUpperCase()}
                </a>
                ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                />
            </div>
            <button
              onClick={() => setView('cart')}
              className="relative p-2 rounded-full text-text-secondary hover:bg-accent hover:text-text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary transition-all duration-300"
            >
              <span className="sr-only">View cart</span>
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center ring-2 ring-surface">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
