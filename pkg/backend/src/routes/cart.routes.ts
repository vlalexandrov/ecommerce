import controllers from '../controllers';
import { Application } from 'express';

const { createOrUpdateCartController, createOrderController } = controllers;

const initCartRoutes = (app: Application): void => {
  app.put('/carts', createOrUpdateCartController);
  app.post('/carts/:cartId/buy', createOrderController);
};

export default initCartRoutes;
