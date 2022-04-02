import controllers from '../controllers';
import { Application } from 'express';

const { createProductController, getProductController } = controllers;

const initProductRoutes = (app: Application): void => {
  app.post('/products', createProductController);
  app.get('/products', getProductController);
};

export default initProductRoutes;
