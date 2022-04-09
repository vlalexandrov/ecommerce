import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';

async function createOrderController(req: Request, res: Response): Promise<void> {
  const cartId = parseInt(req.params.cartId);
  if (!cartId || isNaN(cartId)) {
    sendErrorResponse(res, 'No cart ID specified');
    return;
  }

  try {
    sendSuccessResponse(res, '', 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createOrderController;
