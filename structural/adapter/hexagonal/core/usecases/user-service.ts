import { User } from '../model/user';
import { UserRepository } from '../ports/user-repository';

export class UserService {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  checkIfEmailExists(userList: User[], emailToCheck: string): boolean {
    return userList.some(
      (user) => user.getEmail().toLowerCase() === emailToCheck.toLowerCase(),
    );
  }

  //Verificar esta função
  saveUser(user: User): void {
    const list = this.userRepo.getAll();
    const alreadyUsedEmail: boolean = this.checkIfEmailExists(
      list,
      user.getEmail(),
    );

    if (alreadyUsedEmail) throw new console.error('Email already exists!');
    this.userRepo.save(user);
  }

  getUsers(): Array<User> {
    return this.userRepo.getAll();
  }
}
