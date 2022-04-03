import { IUser } from '../interfaces/user.interface';
import User from '../database/models/user.model';

const createUser = async (userDto: IUser): Promise<User> => {
  try {
    return await User.create(userDto);
  } catch (e) {
    throw new Error(e);
  }
};

export { createUser };
