import controllers from '../controllers';
import { Application } from 'express';

const { getOrderController, getOrderHistoryController, getUserOrderHistoryController } =
  controllers;

const initOrderRoutes = (app: Application): void => {
  app.get('/orders/:orderId', getOrderController);
  app.get('/orders/history/:productId', getOrderHistoryController);
  app.get('/orders/user/:userId', getUserOrderHistoryController);
};

export default initOrderRoutes;
