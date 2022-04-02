import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import ProductAttributes from './product-attributes.model';
import ProductCategory from './product-category.model';
import { IProduct, IProductCreate } from '../../interfaces/product.interface';

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

  @Column({ allowNull: true })
  inventoryId: number;

  @Column
  deleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasOne(() => ProductAttributes)
  productAttributes: ProductAttributes;
}

export default Product;
