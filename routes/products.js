const express = require('express');
const { ProductsService } = require('../services/products');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id);
  res.status(200).json(products);
});

// router.get('/filter', (req, res) => {
//   res.send('Hi there!');
// });

// router.post('/', (req, res) => {
//   const body = req.body;
//   res.status(200).json({
//     message: 'product created',
//     data: body,
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   res.send({
//     id,
//     message: 'product deleted',
//   });
// });

module.exports = router;
