import { Optional } from 'sequelize';
import { IOrderItemCreate } from './order-item.interface';

interface IOrder {
  id: number;
  userId: number;
  total: number;
  orderItems: IOrderItemCreate[];
}

interface IOrderCreate extends Optional<IOrder, 'id'> {}

export { IOrder, IOrderCreate };
