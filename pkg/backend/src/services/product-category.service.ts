import { IProductCategory } from '../interfaces/product-category.interface';
import ProductCategory from '../database/models/product-category.model';

const createCategory = async (categoryDto: IProductCategory): Promise<ProductCategory> => {
  try {
    return await ProductCategory.create(categoryDto);
  } catch (e) {
    throw new Error(e);
  }
};

export { createCategory };
