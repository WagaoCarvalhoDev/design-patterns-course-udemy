export class Register {
  constructor(
    private _storeName: string,
    private _value: number,
    private _date: Date,
  ) {}

  get storeName(): string {
    return this._storeName;
  }

  set storename(storeName: string) {
    this._storeName = this.storeName;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(date: Date) {
    this._date = date;
  }

  toString(): string {
    return (
      'Register [storeName=' +
      this._storeName +
      ', value=' +
      this._value +
      ', date=' +
      this._date +
      ']'
    );
  }
}
