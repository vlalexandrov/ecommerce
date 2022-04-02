import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { IUser, IUserCreate } from '../../interfaces/user.interface';

@Table({ tableName: 'user' })
class User extends Model<IUser, IUserCreate> {
  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  email: string;

  @Column
  deleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default User;
