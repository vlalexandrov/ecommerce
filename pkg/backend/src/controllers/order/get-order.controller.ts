import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getOrderById } from '../../services/order.service';
import orderModelToDtoMapper from '../../mappers/orders/order-model-to-dto.mapper';

// {
//   "type": "success",
//   "data": {
//   "id": 1,
//     "userId": "1",
//     "total": 14010,
//     "createdAt": "2022-04-09T15:29:07.843Z",
//     "updatedAt": "2022-04-09T15:29:07.843Z",
//     "orderItems": [
//     {
//       "id": 1,
//       "orderId": 1,
//       "productId": 2,
//       "quantity": 300,
//       "price": 100,
//       "createdAt": "2022-04-09T15:29:07.847Z",
//       "updatedAt": "2022-04-09T15:29:07.847Z"
//     },
//     {
//       "id": 2,
//       "orderId": 1,
//       "productId": 1,
//       "quantity": 140,
//       "price": 100,
//       "createdAt": "2022-04-09T15:29:07.847Z",
//       "updatedAt": "2022-04-09T15:29:07.847Z"
//     },
//     {
//       "id": 3,
//       "orderId": 1,
//       "productId": 3,
//       "quantity": 201,
//       "price": 10,
//       "createdAt": "2022-04-09T15:29:07.848Z",
//       "updatedAt": "2022-04-09T15:29:07.848Z"
//     }
//   ]
// }
// }

async function getOrderController(req: Request, res: Response): Promise<void> {
  const orderId = parseInt(req.params.orderId);

  if (!orderId || isNaN(orderId)) {
    sendErrorResponse(res, 'No order ID specified');
    return;
  }

  try {
    const order = await getOrderById(orderId);

    const test = await orderModelToDtoMapper(order);

    if (!order) {
      throw new Error("The product with specified ID doesn't exist ");
    }

    // res.render('order', {});
    // const { userId, total, changed } = order;

    sendSuccessResponse(res, test, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getOrderController;
