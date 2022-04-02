import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import Product from './models/product.model';
import ProductAttributes from './models/product-attributes.model';
import ProductCategory from './models/product-category.model';
import ProductInventory from './models/product-inventory.model';
import User from './models/user.model';
import Cart from './models/cart.model';
import CartItem from './models/cart-item.model';
import Order from './models/order.model';
import OrderItem from './models/order-item';

config();

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: 'postgres',
});

sequelize.addModels([
  Product,
  ProductAttributes,
  ProductCategory,
  ProductInventory,
  User,
  Cart,
  CartItem,
  Order,
  OrderItem,
]);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(error => console.error('Unable to connect to the database:', error));

module.exports = sequelize;

export default sequelize;
