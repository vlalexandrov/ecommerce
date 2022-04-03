import controllers from '../controllers';
import { Application } from 'express';

const { createUserController } = controllers;

const initUserRoutes = (app: Application): void => {
  app.post('/users', createUserController);
};

export default initUserRoutes;
