import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import Product from './product.model';
import {
  IProductAttributes,
  IProductAttributesCreate,
} from '../../interfaces/product-attributes.interface';

@Table({ tableName: 'product-attributes' })
class ProductAttributes extends Model<IProductAttributes, IProductAttributesCreate> {
  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId: number;

  @Column
  size: string;

  @Column
  color: string;

  @Column
  season: string;

  @Column
  deleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default ProductAttributes;
