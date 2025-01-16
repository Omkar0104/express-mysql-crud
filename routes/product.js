const express = require('express');
const Product = require('../models/product');
const Category = require('../models/category');

const router = express.Router();

router.get('/list', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const products = await Product.getAll(offset, pageSize);
  const total = await Product.count();
  const totalPages = Math.ceil(total / pageSize);

  res.render('product-list', { products, page, totalPages });
});

router.get('/', async (req, res) => {
  const categories = await Category.getAll();
  res.render('product', { categories });
});

router.post('/create', async (req, res) => {
  const { name, categoryId } = req.body;
  await Product.create(name, categoryId);
  res.redirect('/product/list');
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;
  await Product.delete(id);
  res.redirect('/product/list');
});

module.exports = router;
