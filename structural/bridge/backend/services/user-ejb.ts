import { UserDao } from '../dao/user-dao';
import { User } from '../model/user';
import { UserService } from './user-service';

export class UserEJB extends UserService {
  constructor(dao: UserDao) {
    super(dao);
  }

  save(user: User): void {
    console.log('Starting a save operation through EJB Protocol!' + user);
  }
}
