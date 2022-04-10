import controllers from '../controllers';
import { Application } from 'express';
import getUserController from '../controllers/user/get-user.controller';
import getUserListController from '../controllers/user/get-user-list.controller';

const { createUserController } = controllers;

const initUserRoutes = (app: Application): void => {
  app.post('/users', createUserController);
  app.get('/users', getUserListController);
  app.get('/users/:userId', getUserController);
};

export default initUserRoutes;
