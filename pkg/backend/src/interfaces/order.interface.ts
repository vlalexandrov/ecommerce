import { Optional } from 'sequelize';

interface IOrder {
  id: number;
  userId: number;
  total: number;
}

interface IOrderCreate extends Optional<IOrder, 'id'> {}

export { IOrder, IOrderCreate };
