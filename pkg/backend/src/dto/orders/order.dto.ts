import User from '../../database/models/user.model';
import { OrderItemDto } from './order-item.dto';

export interface OrderDto {
  user: User;
  total: string;
  date: string;
  orderItems: OrderItemDto[];
}
