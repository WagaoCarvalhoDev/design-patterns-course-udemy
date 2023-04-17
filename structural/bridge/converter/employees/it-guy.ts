import { Employee } from './employee';

export class ITGuy extends Employee {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }
}
