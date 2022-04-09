import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import Product from './product.model';
import Order from './order.model';
import { IOrderItem, IOrderItemCreate } from '../../interfaces/order-item.interface';

@Table({ tableName: 'order-item' })
class OrderItem extends Model<IOrderItem, IOrderItemCreate> {
  @ForeignKey(() => Order)
  @Column({ allowNull: false })
  orderId: string;

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

export default OrderItem;
