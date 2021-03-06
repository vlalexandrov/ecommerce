import { IUser } from '../interfaces/user.interface';
import User from '../database/models/user.model';

const createUser = async (userDto: IUser): Promise<User> => {
  try {
    return await User.create(userDto);
  } catch (e) {
    throw new Error(e);
  }
};

const getUserList = async (): Promise<User[]> => {
  try {
    return await User.findAll();
  } catch (e) {
    throw new Error(e);
  }
};

const getUserById = async (id: number): Promise<User> => {
  try {
    return await User.findOne({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

export { createUser, getUserById, getUserList };
