import { Optional } from 'sequelize';

interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  deleted?: boolean;
}

interface IUserCreate extends Optional<IUser, 'id'> {}

export { IUser, IUserCreate };
