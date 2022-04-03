import controllers from '../controllers';
import { Application } from 'express';

const { createOrUpdateCartController } = controllers;

const initCartRoutes = (app: Application): void => {
  app.put('/cart', createOrUpdateCartController);
};

export default initCartRoutes;
