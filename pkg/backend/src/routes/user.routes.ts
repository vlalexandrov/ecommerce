import controllers from '../controllers';
import { Application } from 'express';
import getUserController from '../controllers/user/get-user.controller';

const { createUserController } = controllers;

const initUserRoutes = (app: Application): void => {
  app.post('/users', createUserController);
  app.get('/users/:userId', getUserController);
};

export default initUserRoutes;
