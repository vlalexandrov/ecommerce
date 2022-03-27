import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'product' })
class Product extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column
  desc: string;

  @Column({ allowNull: false })
  price: number;
}

export default Product;
