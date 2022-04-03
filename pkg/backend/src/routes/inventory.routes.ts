import controllers from '../controllers';
import { Application } from 'express';

const { updateInventoryController } = controllers;

const initProductInventoryRoutes = (app: Application): void => {
  app.put('/inventory', updateInventoryController);
};

export default initProductInventoryRoutes;
