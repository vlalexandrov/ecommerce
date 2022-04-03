import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { updateInventory } from '../../services/inventory.service';

async function updateInventoryController(req: Request, res: Response): Promise<void> {
  const { productId, count } = req.body;

  if (!productId || !count) {
    sendErrorResponse(res, 'No data specified');
    return;
  }

  const id = parseInt(productId);
  const inventoryCount = parseInt(count);

  if (isNaN(id) || isNaN(inventoryCount)) {
    sendErrorResponse(res, "Product ID or count don't have a valid type");
    return;
  }

  try {
    const updatedInventoryProduct = await updateInventory(id, inventoryCount);
    sendSuccessResponse(res, updatedInventoryProduct, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default updateInventoryController;
