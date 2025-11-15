
import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, category, setCategory, categories }) => {
  return (
    <div className="flex items-center bg-accent rounded-lg border border-border-color focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-300">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-36 md:w-48 lg:w-56 pl-10 pr-10 py-2 bg-transparent focus:outline-none rounded-l-lg"
        />
        {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="h-5 w-5 text-text-secondary hover:text-text-main"/>
            </button>
        )}
      </div>
      <div className="relative border-l border-border-color h-full">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-full appearance-none bg-transparent rounded-r-lg py-2 pl-3 pr-8 focus:outline-none capitalize text-sm text-text-main"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace(/-/g, ' ')}
            </option>
          ))}
        </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
