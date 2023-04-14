import { UserService } from './user-service';

export class UserRestApiService implements UserService {
  save(name: string): void {
    console.log('Saving ' + name + " through EJB's interface");
  }
  delete(id: number): boolean {
    console.log('Removing User #' + id + " through EJB's interface");
    return true;
  }
}
