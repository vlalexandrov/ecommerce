import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

console.log('sequelize', sequelize);
