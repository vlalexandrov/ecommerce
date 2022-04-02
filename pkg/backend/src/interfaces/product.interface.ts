import { Optional } from 'sequelize';
import { IProductAttributesCreate } from './product-attributes.interface';

interface IProduct {
  id: number;
  name: string;
  sku: string;
  desc?: string;
  price: number;
  categoryId?: number;
  deleted?: boolean;
  productAttributes?: IProductAttributesCreate;
}

interface IProductCreate extends Optional<IProduct, 'id'> {}

export { IProduct, IProductCreate };
