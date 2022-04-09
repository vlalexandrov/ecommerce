import { formatNumber } from '../../utils/formatNumber';
import OrderItem from '../../database/models/order-item';
import { getProduct } from '../../services/product.service';
import { OrderItemDto } from '../../dto/orders/order-item.dto';

const orderItemModelToDtoMapper = async (orderItem: OrderItem): Promise<OrderItemDto> => {
  const { productId, price, quantity } = orderItem;

  const product = await getProduct(productId);
  const formattedPrice = formatNumber(price, '$');

  return {
    productName: product.name,
    price: formattedPrice,
    quantity,
  };
};

export default orderItemModelToDtoMapper;
