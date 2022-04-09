import productControllers from './product';
import productCategoryControllers from './product-cateogory';
import productInventoryControllers from './product-inventory';
import userControllers from './user';
import cartControllers from './cart';

export default {
  ...productControllers,
  ...productCategoryControllers,
  ...productInventoryControllers,
  ...userControllers,
  ...cartControllers,
};
