import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './database';
import {
  initCartRoutes,
  initProductCategoryRoutes,
  initProductInventoryRoutes,
  initProductRoutes,
  initUserRoutes,
  initOrderRoutes,
} from './routes';
import path from 'path';

class Server {
  private app;
  private eraseDatabaseOnSync = false;

  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
  }

  private config(): void {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' }));
    this.app.use(cors());
  }

  private initRoutes(): void {
    initProductRoutes(this.app);
    initProductCategoryRoutes(this.app);
    initProductInventoryRoutes(this.app);
    initUserRoutes(this.app);
    initCartRoutes(this.app);
    initOrderRoutes(this.app);
  }

  public start = (port: number): void => {
    db.sync({ force: this.eraseDatabaseOnSync }).then(() => {
      this.app
        .listen(port, () => {
          console.log(`Server is ready at ${port} port`);
        })
        .on('error', err => console.error(err));
    });
  };
}

export default Server;
