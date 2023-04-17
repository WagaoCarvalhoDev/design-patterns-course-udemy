import { UserDao } from '../dao/user-dao';
import { User } from '../model/user';

export abstract class UserService {
  constructor(protected dao: UserDao) {}

  abstract save(user: User): void;
}
