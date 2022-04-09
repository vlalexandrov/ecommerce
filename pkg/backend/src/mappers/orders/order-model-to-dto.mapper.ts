import Order from '../../database/models/order.model';
import { OrderDto } from '../../dto/orders/order.dto';
import { getUserById } from '../../services/user.service';
import { formatNumber } from '../../utils/formatNumber';
import dayjs from 'dayjs';

const orderModelToDtoMapper = async (order: Order): Promise<OrderDto> => {
  const { userId, total, createdAt } = order; // orderItems

  const user = await getUserById(userId);
  const formattedTotal = formatNumber(total, '$');
  const createdDate = dayjs(createdAt).format('YYYY-MM-DD HH:mm');

  return {
    user,
    total: formattedTotal,
    date: createdDate,
  };
};

export default orderModelToDtoMapper;
