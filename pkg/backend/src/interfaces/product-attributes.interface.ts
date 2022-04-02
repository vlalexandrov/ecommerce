import { Optional } from 'sequelize';

interface IProductAttributes {
  id: number;
  size: string;
  color?: string;
  season?: string;
  deleted?: boolean;
}

interface IProductAttributesCreate extends Optional<IProductAttributes, 'id'> {}

export { IProductAttributes, IProductAttributesCreate };
