import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import Cart from './cart.model';
import Product from './product.model';
import { ICartItem, ICartItemCreate } from '../../interfaces/cart-item.interface';

@Table({ tableName: 'cart-item' })
class CartItem extends Model<ICartItem, ICartItemCreate> {
  @ForeignKey(() => Cart)
  @Column({ allowNull: false })
  cartId: string;

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

export default CartItem;
