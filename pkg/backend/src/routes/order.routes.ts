import controllers from '../controllers';
import { Application } from 'express';

const { getOrderController } = controllers;

const initOrderRoutes = (app: Application): void => {
  app.get('/orders/:orderId', getOrderController);
};

export default initOrderRoutes;
