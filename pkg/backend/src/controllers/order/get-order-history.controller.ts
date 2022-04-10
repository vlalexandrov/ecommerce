import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getOrderHistoryByProductId } from '../../services/order.service';
import orderModelToDtoMapper from '../../mappers/orders/order-model-to-dto.mapper';

async function getOrderHistoryController(req: Request, res: Response): Promise<void> {
  const productId = parseInt(req.params.productId);

  if (!productId || isNaN(productId)) {
    sendErrorResponse(res, 'No product ID specified');
    return;
  }

  try {
    const orderHistory = await getOrderHistoryByProductId(productId);
    const ordersFormatted = [];

    for (const order of orderHistory) {
      ordersFormatted.push(await orderModelToDtoMapper(order));
    }

    sendSuccessResponse(res, ordersFormatted, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getOrderHistoryController;
