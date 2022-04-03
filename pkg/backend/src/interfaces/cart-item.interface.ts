import { Optional } from 'sequelize';

interface ICartItem {
  id: number;
  productId: number;
  quantity: number;
}

interface ICartItemCreate extends Optional<ICartItem, 'id'> {}

export { ICartItem, ICartItemCreate };
