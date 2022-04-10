import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getOrderHistoryByProductId } from '../../services/order.service';

async function getOrderHistoryController(req: Request, res: Response): Promise<void> {
  const productId = parseInt(req.params.productId);

  if (!productId || isNaN(productId)) {
    sendErrorResponse(res, 'No product ID specified');
    return;
  }

  try {
    const orderHistory = await getOrderHistoryByProductId(productId);
    sendSuccessResponse(res, orderHistory, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getOrderHistoryController;
