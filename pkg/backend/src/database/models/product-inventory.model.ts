import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import {
  IProductInventory,
  IProductInventoryCreate,
} from '../../interfaces/product-inventory.interface';
import Product from './product.model';

@Table({ tableName: 'product-inventory' })
class ProductInventory extends Model<IProductInventory, IProductInventoryCreate> {
  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId: number;

  @Column({ allowNull: false })
  quantity: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default ProductInventory;
