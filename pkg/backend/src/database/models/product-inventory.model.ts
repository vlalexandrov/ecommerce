import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import {
  IProductInventory,
  IProductInventoryCreate,
} from '../../interfaces/product-inventory.interface';
import Product from './product.model';

@DefaultScope(() => ({
  attributes: ['id', 'quantity'],
}))
@Table({ tableName: 'product-inventory' })
class ProductInventory extends Model<IProductInventory, IProductInventoryCreate> {
  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId: number;

  @Column({ allowNull: false })
  quantity: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default ProductInventory;
