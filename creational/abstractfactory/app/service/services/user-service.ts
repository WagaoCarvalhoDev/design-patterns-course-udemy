export interface UserService {
  save(name: string): void;
  delete(id: number): boolean;
}
