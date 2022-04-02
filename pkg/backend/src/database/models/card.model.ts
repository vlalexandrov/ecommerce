import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import User from './user.model';
import { ICart, ICartCreate } from '../../interfaces/cart.interface';

@Table({ tableName: 'cart' })
class Cart extends Model<ICart, ICartCreate> {
  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId: string;

  @Column({ allowNull: false })
  total: number;

  @Column
  closed: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Cart;
