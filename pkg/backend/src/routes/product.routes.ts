import controllers from '../controllers';
import { Application } from 'express';

const { createProductController, getProductListController, getProductController } = controllers;

const initProductRoutes = (app: Application): void => {
  app.post('/products', createProductController);
  app.get('/products', getProductListController);
  app.get('/products/:id', getProductController);
};

export default initProductRoutes;
