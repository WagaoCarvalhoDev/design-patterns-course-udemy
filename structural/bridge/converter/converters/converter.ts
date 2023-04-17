import { Employee } from '../employees/employee';

export interface Converter {
  getEmployeeFormated(emp: Employee): string;
}
