import controllers from '../controllers';
import { Application } from 'express';

const { createProductController, getProductListController } = controllers;

const initProductRoutes = (app: Application): void => {
  app.post('/products', createProductController);
  app.get('/products', getProductListController);
};

export default initProductRoutes;
