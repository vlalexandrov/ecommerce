import { Optional } from 'sequelize';
import { ICartItemCreate } from './cart-item.interface';

interface ICart {
  id: number;
  userId: number;
  total: number;
  closed?: boolean;
  cartItems: ICartItemCreate[];
}

interface ICartCreate extends Optional<ICart, 'id'> {}

export { ICart, ICartCreate };
