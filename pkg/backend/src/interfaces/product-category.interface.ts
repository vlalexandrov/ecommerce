import { Optional } from 'sequelize';

interface IProductCategory {
  id: number;
  name: string;
  desc?: string;
  deleted?: boolean;
}

interface IProductCategoryCreate extends Optional<IProductCategory, 'id'> {}

export { IProductCategory, IProductCategoryCreate };
