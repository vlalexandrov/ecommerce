import { Optional } from 'sequelize';
import { IProductAttributesCreate } from './product-attributes.interface';
import { IProductInventoryCreate } from './product-inventory.interface';

interface IProduct {
  id: number;
  name: string;
  sku: string;
  desc?: string;
  price: number;
  categoryId?: number;
  productAttributes?: IProductAttributesCreate;
  productInventory?: IProductInventoryCreate;
  deleted?: boolean;
}

interface IProductCreate extends Optional<IProduct, 'id'> {}

export { IProduct, IProductCreate };
