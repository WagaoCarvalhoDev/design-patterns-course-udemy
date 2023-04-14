import { User } from '../model/user';

export interface UserRepository {
  save(user: User): void;
  getAll(): Array<User>;
}
