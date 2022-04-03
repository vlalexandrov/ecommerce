import productControllers from './product';
import productCategoryControllers from './product-cateogory';
import productInventoryControllers from './product-inventory';

export default {
  ...productControllers,
  ...productCategoryControllers,
  ...productInventoryControllers,
};
