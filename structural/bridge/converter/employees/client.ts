import { Converter } from '../converters/converter';
import { CSVConverter } from '../converters/csv-converter';
import { JsonConverter } from '../converters/json-converter';
import { ITGuy } from './it-guy';
import { ProjectManager } from './project-manager';

const csvConverter: Converter = new CSVConverter();
const jsonConverter: Converter = new JsonConverter();

const it: ITGuy = new ITGuy('Maurice Moss', 32, 4000);
const pm = new ProjectManager('Jen Barber', 40, 6000);

console.log(csvConverter.getEmployeeFormated(it));
console.log(jsonConverter.getEmployeeFormated(it));
console.log(csvConverter.getEmployeeFormated(pm));
console.log(jsonConverter.getEmployeeFormated(pm));
