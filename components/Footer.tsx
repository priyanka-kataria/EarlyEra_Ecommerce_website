import React from 'react';
import { Sparkles, Instagram, Linkedin, Twitter } from 'lucide-react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-surface border-t border-border-color mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center cursor-pointer" onClick={() => setView('products')}>
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-text-main">EarlyEra</span>
            </div>
            <p className="mt-4 text-text-secondary text-sm">
              Your premier destination for a curated selection of quality goods.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setView('about') }} className="text-text-secondary hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-main font-semibold tracking-wider uppercase">Get Help</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Payment</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setView('contact') }} className="text-text-secondary hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-main font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Linkedin /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border-color pt-8 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} EarlyEra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
