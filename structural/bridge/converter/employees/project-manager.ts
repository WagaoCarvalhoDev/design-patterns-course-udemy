import { Employee } from './employee';

export class ProjectManager extends Employee {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }
}
