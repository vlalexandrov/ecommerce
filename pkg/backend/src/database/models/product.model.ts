import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasOne,
  ForeignKey,
  Scopes,
} from 'sequelize-typescript';
import ProductAttributes from './product-attributes.model';
import ProductCategory from './product-category.model';
import { IProduct, IProductCreate } from '../../interfaces/product.interface';
import ProductInventory from './product-inventory.model';

@Scopes(() => ({
  basic: {
    attributes: ['id', 'name', 'sku', 'desc', 'price'],
  },
}))
@Table({ tableName: 'product' })
class Product extends Model<IProduct, IProductCreate> {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  sku: string;

  @Column
  desc: string;

  @Column({ allowNull: false })
  price: number;

  @ForeignKey(() => ProductCategory)
  @Column
  categoryId: number;

  @Column
  deleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasOne(() => ProductAttributes)
  productAttributes: ProductAttributes;

  @HasOne(() => ProductInventory)
  productInventory: ProductInventory;
}

export default Product;
