import express from 'express';
import bodyParser from 'body-parser';
import db from './database';
import {
  initCartRoutes,
  initProductCategoryRoutes,
  initProductInventoryRoutes,
  initProductRoutes,
  initUserRoutes,
} from './routes';

class Server {
  private app;
  private eraseDatabaseOnSync = false;

  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' }));
  }

  private initRoutes(): void {
    initProductRoutes(this.app);
    initProductCategoryRoutes(this.app);
    initProductInventoryRoutes(this.app);
    initUserRoutes(this.app);
    initCartRoutes(this.app);
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
