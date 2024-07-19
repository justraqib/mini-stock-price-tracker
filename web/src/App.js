// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StockSelector from './components/StockSelector';
import PriceDisplay from './components/PriceDisplay';

// Predefined stocks
const stocks = [
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'GOOGL', name: 'Google' },
  { symbol: 'AMZN', name: 'Amazon' },
  { symbol: 'MSFT', name: 'Microsoft'},
];

const App = () => {
  const [selectedStock, setSelectedStock] = useState(stocks[0].symbol );
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/stock-price/${selectedStock}`);
        setPrice(response.data.price);
      } catch (error) {
        console.error('Error fetching:', error);
        setPrice('Failed to fetch price');
      }
    };

    if (selectedStock) {
      fetchPrice();
      const intervalId = setInterval(fetchPrice, 60000); // Fetch price every minute

      return () => clearInterval(intervalId);
    }
  }, [selectedStock]);

  return (
    <div className="container">
      <h1>Mini Stock Price Tracker</h1>
      <div className="selector-container">
        <StockSelector stocks={stocks} selectedStock={selectedStock} onSelect={setSelectedStock} />
      </div>
      <PriceDisplay price={price} />
    </div>
  );
};

export default App;
