import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { placeOrder } from '../../services/order.service';

async function createOrderController(req: Request, res: Response): Promise<void> {
  const cartId = parseInt(req.params.cartId);

  if (!cartId || isNaN(cartId)) {
    sendErrorResponse(res, 'No cart ID specified');
    return;
  }

  try {
    await placeOrder(cartId);
    sendSuccessResponse(res, 'The order has been successfully placed', 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createOrderController;
