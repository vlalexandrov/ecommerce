import { Table, Column, Model, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import Product from './product.model';
import {
  IProductCategory,
  IProductCategoryCreate,
} from '../../interfaces/product-category.interface';

@Table({ tableName: 'product-category' })
class ProductCategory extends Model<IProductCategory, IProductCategoryCreate> {
  @Column({ allowNull: false })
  name: string;

  @Column
  desc: string;

  @Column
  deleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Product)
  products: Product[];
}

export default ProductCategory;
