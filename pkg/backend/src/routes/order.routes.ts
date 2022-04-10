import controllers from '../controllers';
import { Application } from 'express';

const { getOrderController, getOrderHistoryController } = controllers;

const initOrderRoutes = (app: Application): void => {
  app.get('/orders/:orderId', getOrderController);
  app.get('/orders/history/:productId', getOrderHistoryController);
};

export default initOrderRoutes;
