import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';

async function getOrderController(req: Request, res: Response): Promise<void> {
  // const cartId = parseInt(req.params.orderId);

  // if (!cartId || isNaN(cartId)) {
  //   sendErrorResponse(res, 'No cart ID specified');
  //   return;
  // }

  try {
    // await placeOrder(cartId);
    sendSuccessResponse(res, 'wow', 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getOrderController;
