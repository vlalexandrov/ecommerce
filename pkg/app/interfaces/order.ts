import { IUser } from './user';
import { IOrderItem } from './order-item';

export interface IOrder {
  user: IUser;
  total: string;
  date: string;
  orderItems: IOrderItem[];
}
