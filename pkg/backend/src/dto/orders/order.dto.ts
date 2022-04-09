import User from '../../database/models/user.model';

export interface OrderDto {
  user: User;
  total: string;
  date: string;
}
