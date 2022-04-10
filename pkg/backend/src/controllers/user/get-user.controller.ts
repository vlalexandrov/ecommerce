import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getUserById } from '../../services/user.service';

async function getUserController(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.userId);
  if (!id || isNaN(id)) {
    sendErrorResponse(res, 'No user ID specified');
    return;
  }

  try {
    const user = await getUserById(id);

    if (!user) {
      sendErrorResponse(res, 'No user found with this ID');
      return;
    }

    sendSuccessResponse(res, user, 200);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getUserController;
