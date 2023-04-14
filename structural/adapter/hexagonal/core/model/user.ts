export class User {
  constructor(
    private name?: string,
    private email?: string,
    private password?: string,
  ) {}

  getName(): string {
    return this.name!;
  }

  getEmail(): string {
    return this.email!;
  }
  getPassword(): string {
    return this.email!;
  }

  toString(): string {
    return (
      'User [name=' +
      this.name +
      ', email=' +
      this.email +
      ', password=' +
      this.password +
      ']'
    );
  }
}
