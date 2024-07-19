const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const Stock = require('./models/stock');
const app = express();
const PORT = 8080;

app.use(cors());

connectDB().then(() => {
  // Predefined list
  const Predefined = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.00 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 280.00 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.00 },
    { symbol: 'AMZN', name: 'Amazon', price: 3500.00 },
  ];

  const insertDatabae = async () => {
    try {
      await Stock.deleteMany();
      await Stock.insertMany(Predefined);
      console.log('Data insert Succesfully');
    } catch (error) {
      console.error('Error database:', error);
    }
  };

  insertDatabae();

  // Endpoint get a random price
  app.get('/stock-price/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const stock = await Stock.findOne({ symbol });

    if (!stock) {
      return res.json({ error: 'Stock not found' });
    }

    // Generate a random price between 50 t0 200
    const randomPrice = (Math.random() * (200 - 50) + 50).toFixed(2);

    res.json({
      symbol: stock.symbol,
      name: stock.name,
      price: randomPrice
    });
  });

  app.listen(PORT, () => {
    console.log('Start server');
  });

}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
