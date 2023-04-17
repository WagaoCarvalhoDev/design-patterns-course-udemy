import { StringBuilder } from '../../utils/string-builder';
import { Employee } from '../employees/employee';
import { Converter } from './converter';

export class JsonConverter implements Converter {
  getEmployeeFormated(emp: Employee): string {
    const builder = new StringBuilder();
    builder
      .append('{\n')
      .append('\t"name": "')
      .append(emp.name)
      .append('",\n')
      .append('\t"age": "')
      .append(emp.age.toString())
      .append('",\n')
      .append('\t"salary": "')
      .append(emp.salary.toString())
      .append('"\n')
      .append('}');

    return builder.toString();
  }
}
