import { User } from '../core/model/user';
import { UserService } from '../core/usecases/user-service';
import { UserMemoryDatabaseAdapter } from '../infrastructure/user-memory-database-adapter';

export class UserRest {
  private userFacade: UserService;
  constructor() {
    const userRepo = new UserMemoryDatabaseAdapter();
    this.userFacade = new UserService(userRepo);
  }

  post(values: Map<string, string>): number {
    try {
      const user: User = new User(
        values.get('name'),
        values.get('email'),
        values.get('password'),
      );
      this.userFacade.saveUser(user);
    } catch (e: unknown) {
      console.log(e);
      return 400;
    }
    return 201;
  }

  get(): number {
    const users: Array<User> = this.userFacade.getUsers();
    users.forEach((u) => console.log(u));
    return 200;
  }
}
