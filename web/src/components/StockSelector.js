// src/components/StockSelector.js
import React from 'react';

const StockSelector = ({ stocks, selectedStock, onSelect }) => {
  return (
    <div className="selector-container">
      <label htmlFor="stock-selector">Select a stock:</label>
      <div className="dropdown">
        <div className="dropdown-toggle">
          {stocks.find(stock => stock.symbol === selectedStock)?.name || 'Select a stock'}
        </div>
        <div className="dropdown-content">
          {stocks.map((stock) => (
            <a
              key={stock.symbol}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect(stock.symbol);
              }}
            >
              {stock.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockSelector;
