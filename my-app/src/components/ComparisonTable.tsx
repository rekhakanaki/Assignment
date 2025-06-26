import React from 'react';
import { Product } from '../App';

interface ComparisonTableProps {
  compareList: Product[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ compareList, onRemove, onClear }) => {
  const highlightDiff = (key: keyof Product, i?: number): string => {
    const values = compareList.map(p =>
      key === 'features' && typeof i === 'number' ? p.features[i] : p[key]
    );
    const uniqueValues = Array.from(new Set(values));
    return uniqueValues.length > 1 ? 'highlight' : '';
  };

  return (
    <div className="comparison-view">
      <h2>Compare Products</h2>
      <div className="compare-table">
        <div className="compare-row header">
          <div>Attribute</div>
          {compareList.map(p => <div key={p.id}>{p.name}</div>)}
        </div>
        <div className="compare-row">
          <div>Brand</div>
          {compareList.map(p => (
            <div key={p.id} className={highlightDiff('brand')}>{p.brand}</div>
          ))}
        </div>
        <div className="compare-row">
          <div>Price</div>
          {compareList.map(p => (
            <div key={p.id} className={highlightDiff('price')}>{p.price}</div>
          ))}
        </div>
        {[0, 1, 2].map(i => (
          <div className="compare-row" key={i}>
            <div>Feature {i + 1}</div>
            {compareList.map(p => (
              <div key={p.id} className={highlightDiff('features', i)}>
                {p.features[i] || '—'}
              </div>
            ))}
          </div>
        ))}
        <div className="compare-row">
          <div>Actions</div>
          {compareList.map(p => (
            <div key={p.id}><button onClick={() => onRemove(p.id)}>Remove</button></div>
          ))}
        </div>
      </div>
      <button className="clear-btn" onClick={onClear}>Clear All</button>
    </div>
  );
};

export default ComparisonTable;
