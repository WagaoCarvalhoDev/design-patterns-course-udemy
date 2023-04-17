import { User } from '../model/user';
import { UserDao } from './user-dao';

export class UserPostgresDao implements UserDao {
  save(user: User): void {
    console.log('Saving the user in the Postgres Database!' + user);
  }
}
