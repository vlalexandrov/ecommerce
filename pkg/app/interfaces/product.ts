import { IProductInventory } from './product-inventory';

export interface IProduct {
  id: number;
  name: string;
  desc: string;
  price: number;
  productInventory: IProductInventory;
}
