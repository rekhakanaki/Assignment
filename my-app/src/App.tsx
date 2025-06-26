// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ComparisonTable from './components/ComparisonTable';
import { productData } from './Products/data';

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  features: string[];
}

function App() {
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('compareList');
    if (saved) setCompareList(JSON.parse(saved));
    const theme = localStorage.getItem('darkMode');
    if (theme) setDarkMode(JSON.parse(theme));
  }, []);

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [compareList, darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleCompareToggle = (product: Product) => {
    if (compareList.find(p => p.id === product.id)) {
      setCompareList(compareList.filter(p => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const clearComparison = () => setCompareList([]);
  const removeFromCompare = (id: number) => {
    setCompareList(compareList.filter(p => p.id !== id));
  };

  const filteredProducts = productData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header
        search={search}
        setSearch={setSearch}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />

      <ProductGrid
        products={filteredProducts}
        compareList={compareList}
        onToggleCompare={handleCompareToggle}
      />

      {compareList.length >= 2 && (
        <ComparisonTable
          compareList={compareList}
          onRemove={removeFromCompare}
          onClear={clearComparison}
        />
      )}
    </div>
  );
}

export default App;