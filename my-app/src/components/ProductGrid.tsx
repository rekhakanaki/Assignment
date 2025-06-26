// components/ProductGrid.tsx
import React from 'react';
import { Product } from '../App';

interface ProductGridProps {
  products: Product[];
  compareList: Product[];
  onToggleCompare: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, compareList, onToggleCompare }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="image-wrapper">
            <img src={product.image} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p><strong>{product.brand}</strong></p>
          <p>{product.price}</p>
          <ul>
            {product.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <button onClick={() => onToggleCompare(product)}>
            {compareList.find(p => p.id === product.id) ? 'Remove from Compare' : 'Add to Compare'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
