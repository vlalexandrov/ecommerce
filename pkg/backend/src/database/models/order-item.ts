import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import Product from './product.model';
import Order from './order.model';
import { IOrderItem, IOrderItemCreate } from '../../interfaces/order-item.interface';

@DefaultScope(() => ({
  attributes: ['id', 'orderId', 'productId', 'quantity', 'price'],
}))
@Table({ tableName: 'order-item' })
class OrderItem extends Model<IOrderItem, IOrderItemCreate> {
  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId: number;

  @Column({ allowNull: false })
  quantity: number;

  @Column({ allowNull: false })
  price: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default OrderItem;
