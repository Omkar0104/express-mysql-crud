const express = require('express');
const Category = require('../models/category');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.getAll();
  res.render('category', { categories });
});

router.post('/create', async (req, res) => {
  const { name } = req.body;
  await Category.create(name);
  res.redirect('/category');
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;
  await Category.delete(id);
  res.redirect('/category');
});

module.exports = router;
