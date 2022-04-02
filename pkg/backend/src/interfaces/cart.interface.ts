import { Optional } from 'sequelize';

interface ICart {
  id: number;
  userId: number;
  total: number;
  closed?: boolean;
}

interface ICartCreate extends Optional<ICart, 'id'> {}

export { ICart, ICartCreate };
