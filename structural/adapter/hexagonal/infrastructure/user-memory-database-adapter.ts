import { User } from '../core/model/user';
import { UserRepository } from '../core/ports/user-repository';

export class UserMemoryDatabaseAdapter implements UserRepository {
  private memoryUsers: Map<string, User> = new Map<string, User>();

  save(user: User): void {
    this.memoryUsers.set(user.getEmail(), user);
  }
  getAll(): User[] {
    return Array.from(this.memoryUsers.values());
  }
}
