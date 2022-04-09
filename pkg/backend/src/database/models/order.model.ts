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
import { IOrder, IOrderCreate } from '../../interfaces/order.interface';
import OrderItem from './order-item';

@Table({ tableName: 'order' })
class Order extends Model<IOrder, IOrderCreate> {
  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId: string;

  @Column({ allowNull: false })
  total: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => OrderItem)
  orderItems: OrderItem[];
}

export default Order;
