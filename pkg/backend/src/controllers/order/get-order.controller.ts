import { Request, Response } from 'express';
import { sendErrorResponse } from '../../services/response.service';
import { getOrderById } from '../../services/order.service';
import orderModelToDtoMapper from '../../mappers/orders/order-model-to-dto.mapper';

async function getOrderController(req: Request, res: Response): Promise<void> {
  const orderId = parseInt(req.params.orderId);

  if (!orderId || isNaN(orderId)) {
    sendErrorResponse(res, 'No order ID specified');
    return;
  }

  try {
    const order = await getOrderById(orderId);
    if (!order) {
      throw new Error("The product with specified ID doesn't exist ");
    }

    const orderDto = await orderModelToDtoMapper(order);
    res.render('order', {
      ...orderDto,
    });
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getOrderController;
