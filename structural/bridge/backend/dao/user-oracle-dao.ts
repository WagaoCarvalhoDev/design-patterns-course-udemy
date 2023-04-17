import { User } from '../model/user';
import { UserDao } from './user-dao';

export class UserOracleDao implements UserDao {
  save(user: User): void {
    console.log('Saving the user in the Oracle Database!' + user);
  }
}
