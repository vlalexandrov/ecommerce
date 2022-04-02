import { Table, Column, Model, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import Product from './product.model';

export interface IProductCategory {
  name: string;
  desc?: string;
  deleted?: boolean;
}

@Table({ tableName: 'product-category' })
class ProductCategory extends Model<IProductCategory> {
  // <ProductCategory>
  // @ForeignKey(() => Product)
  // @Column({ allowNull: false })
  // productId: number;

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
