import React from 'react';

interface CategoryShowcaseProps {
    setCategory: (category: string) => void;
    setView: (view: 'products') => void;
}

const categories = [
    { name: 'Laptops', value: 'laptops', image: 'https://picsum.photos/seed/new-york-city/400/500' },
    { name: 'Skincare', value: 'skincare', image: 'https://picsum.photos/seed/city-street/400/500' },
    { name: 'Home Decor', value: 'home-decoration', image: 'https://picsum.photos/seed/ocean-sunset/400/500' },
    { name: 'Groceries', value: 'groceries', image: 'https://picsum.photos/seed/rainy-window/400/500' },
    { name: 'Fragrances', value: 'fragrances', image: 'https://picsum.photos/seed/perfume-bottle/400/500' },
    { name: 'Furniture', value: 'furniture', image: 'https://picsum.photos/seed/modern-chair/400/500' },
]

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ setCategory, setView }) => {
    
    const handleCategoryClick = (categoryValue: string) => {
        setCategory(categoryValue);
        setView('products');
        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="my-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-main">Shop by Category</h2>
                <p className="text-text-secondary mt-2">Find what you're looking for, faster.</p>
            </div>
            <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                {categories.map((cat) => (
                    <div 
                        key={cat.value} 
                        onClick={() => handleCategoryClick(cat.value)}
                        className="relative rounded-xl overflow-hidden h-72 w-56 flex-shrink-0 group cursor-pointer"
                    >
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h3 className="text-white text-center text-2xl font-bold tracking-wider">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategoryShowcase;