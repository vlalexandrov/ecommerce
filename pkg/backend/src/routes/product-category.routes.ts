import controllers from '../controllers';
import { Application } from 'express';

const initProductCategoryRoutes = (app: Application): void => {
  app.post('/product-categories', controllers.createProductCategoryController);
};

export default initProductCategoryRoutes;
