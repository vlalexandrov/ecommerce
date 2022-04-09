import Order from '../../database/models/order.model';
import { OrderDto } from '../../dto/orders/order.dto';
import { getUserById } from '../../services/user.service';
import { formatNumber } from '../../utils/formatNumber';
import dayjs from 'dayjs';
import orderItemModelToDtoMapper from './order-item-model-to-dto.mapper';
import { OrderItemDto } from '../../dto/orders/order-item.dto';

const orderModelToDtoMapper = async (order: Order): Promise<OrderDto> => {
  const { userId, total, createdAt, orderItems } = order;

  const user = await getUserById(userId);
  const formattedTotal = formatNumber(total, '$');
  const createdDate = dayjs(createdAt).format('YYYY-MM-DD HH:mm');

  const items: OrderItemDto[] = [];
  const tasks = [];
  for (const item of orderItems) {
    const task = orderItemModelToDtoMapper(item).then(result => {
      items.push(result);
    });
    tasks.push(task);
  }

  await Promise.all(tasks);

  return {
    user,
    total: formattedTotal,
    date: createdDate,
    orderItems: items,
  };
};

export default orderModelToDtoMapper;
