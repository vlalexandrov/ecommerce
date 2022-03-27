import controllers from '../controllers';
import { Application } from 'express';

const initProductRoutes = (app: Application): void => {
  app.post('/products', controllers.createProductController);
};

export default initProductRoutes;
