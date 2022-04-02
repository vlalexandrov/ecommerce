import { Optional } from 'sequelize';

interface IProductInventory {
  id: number;
  quantity: number;
}

interface IProductInventoryCreate extends Optional<IProductInventory, 'id'> {}

export { IProductInventory, IProductInventoryCreate };
