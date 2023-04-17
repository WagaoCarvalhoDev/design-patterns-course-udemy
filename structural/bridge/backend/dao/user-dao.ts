import { User } from '../model/user';

export interface UserDao {
  save(user: User): void;
}
