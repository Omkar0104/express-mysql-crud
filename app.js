const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

// Home Route
app.get('/', (req, res) => {
  res.redirect('/product/list');
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
