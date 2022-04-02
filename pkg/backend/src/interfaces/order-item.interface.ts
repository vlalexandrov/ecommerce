import { Optional } from 'sequelize';

interface IOrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
}

interface IOrderItemCreate extends Optional<IOrderItem, 'id'> {}

export { IOrderItem, IOrderItemCreate };
