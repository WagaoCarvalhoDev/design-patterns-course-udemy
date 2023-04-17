import { Employee } from '../employees/employee';
import { Converter } from './converter';

export class CSVConverter implements Converter {
  getEmployeeFormated(emp: Employee): string {
    return `${emp.name}, ${emp.age}, ${emp.salary}`;
  }
}
