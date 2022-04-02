import productControllers from './product';
import productCategoryControllers from './product-cateogory';

export default {
  ...productControllers,
  ...productCategoryControllers,
};
