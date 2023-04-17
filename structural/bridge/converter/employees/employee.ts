export abstract class Employee {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _salary: number,
  ) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(salary: number) {
    this._salary = salary;
  }
}
