import productControllers from './product';
import productCategoryControllers from './product-cateogory';
import userControllers from './user';

export default {
  ...productControllers,
  ...productCategoryControllers,
  ...userControllers,
};
