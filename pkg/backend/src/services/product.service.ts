import Product from '../database/models/product.model';
import ProductAttributes from '../database/models/product-attributes.model';
import ProductInventory from '../database/models/product-inventory.model';
import { IProduct } from '../interfaces/product.interface';

const createProduct = async (productDTO: IProduct): Promise<Product> => {
  try {
    const product = await Product.create(productDTO, {
      include: [ProductAttributes, ProductInventory],
    });

    return product;
  } catch (e) {
    throw new Error(e);
  }
};

export { createProduct };
