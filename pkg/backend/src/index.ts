import server from './server';
const port = 3000;

const app = new server();
app.start(port);
