export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
  ) {}

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  toString(): string {
    return (
      'User [name=' +
      this.name +
      ', email=' +
      this._email +
      ', password=' +
      this._password +
      ']'
    );
  }
}
