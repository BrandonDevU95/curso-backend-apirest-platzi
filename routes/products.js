const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.random.number,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Hi there!');
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(200).json({
    message: 'product created',
    data: body,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.status(201).json({
    id,
    message: 'product updated',
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    message: 'product deleted',
  });
});

module.exports = router;
