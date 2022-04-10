import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getUserOrderHistoryById } from '../../services/order.service';
import orderModelToDtoMapper from '../../mappers/orders/order-model-to-dto.mapper';

async function getUserOrderHistoryController(req: Request, res: Response): Promise<void> {
  const userId = parseInt(req.params.userId);

  if (!userId || isNaN(userId)) {
    sendErrorResponse(res, 'No user ID specified');
    return;
  }

  try {
    const orderHistory = await getUserOrderHistoryById(userId);
    const ordersFormatted = [];

    for (const order of orderHistory) {
      ordersFormatted.push(await orderModelToDtoMapper(order));
    }

    sendSuccessResponse(res, ordersFormatted, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getUserOrderHistoryController;
