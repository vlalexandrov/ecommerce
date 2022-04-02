import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import User from './user.model';
import { ICart, ICartCreate } from '../../interfaces/cart.interface';
import CartItem from './cart-item.model';

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

  @HasMany(() => CartItem)
  cartItems: CartItem[];
}

export default Cart;
