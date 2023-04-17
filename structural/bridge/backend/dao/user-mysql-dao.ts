import { User } from '../model/user';
import { UserDao } from './user-dao';

export class UserMysqlDao implements UserDao {
  save(user: User): void {
    console.log('Saving the user in the Mysl Database!' + user);
  }
}
