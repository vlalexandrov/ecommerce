import Product from '../database/models/product.model';
import ProductAttributes from '../database/models/product-attributes.model';
import ProductInventory from '../database/models/product-inventory.model';
import { IProduct } from '../interfaces/product.interface';
import { Op } from 'sequelize';
import productModelToDtoMapper from '../mappers/products/product-model-to-dto.mapper';
import { ProductDto } from '../dto/products/product.dto';

const createProduct = async (productDTO: IProduct): Promise<Product> => {
  try {
    return await Product.create(productDTO, {
      include: [ProductAttributes, ProductInventory],
    });
  } catch (e) {
    throw new Error(e);
  }
};

const getProductList = async (
  offset = 0,
): Promise<{
  products: Product[];
  count: number;
}> => {
  try {
    const { rows, count } = await Product.scope('basic').findAndCountAll({
      include: [
        {
          model: ProductInventory,
          where: {
            quantity: {
              [Op.gt]: 0,
            },
          },
        },
      ],
      offset: offset,
      limit: 2,
    });

    return {
      products: rows,
      count,
    };
  } catch (e) {
    throw new Error(e);
  }
};

const getProduct = async (id: number): Promise<ProductDto> => {
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
      include: [ProductAttributes, ProductInventory],
    });

    return productModelToDtoMapper(product);
  } catch (e) {
    throw new Error(e);
  }
};

export { createProduct, getProductList, getProduct };
