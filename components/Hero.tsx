import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center rounded-lg my-8 h-96 flex items-center justify-center text-center animate-fade-in"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lifestyle/1200/400')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Discover Your Style. Define Your Era.
        </h1>
        <p className="text-white/90 text-lg mb-8">
          Welcome to the next era of shopping. Explore our curated collection of quality goods designed to elevate your life.
        </p>
        <button 
          onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-primary to-sky-400 text-white font-bold py-3 px-8 rounded-lg hover:from-primary-hover hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
