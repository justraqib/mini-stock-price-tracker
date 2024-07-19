// src/components/PriceDisplay.js
import React from 'react';

const PriceDisplay = ({ price }) => {
  return <div className="price-display">Current Price: ${price}</div>;
};

export default PriceDisplay;
