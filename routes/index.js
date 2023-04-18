const productRouter = require('./products');
// const usersRouter = require('./users');

function routerApi(app) {
  app.use('/products', productRouter);
  //   app.use('/users', usersRouter);
}

module.exports = routerApi;
