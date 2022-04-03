import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { CartInput } from '../../interfaces/cart-input.interface';
import { createOrUpdateCart } from '../../services/cart.service';

async function createOrUpdateCartController(req: Request, res: Response): Promise<void> {
  const userCart = req.body as CartInput;

  try {
    const cart = await createOrUpdateCart(userCart);
    sendSuccessResponse(res, cart, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createOrUpdateCartController;
