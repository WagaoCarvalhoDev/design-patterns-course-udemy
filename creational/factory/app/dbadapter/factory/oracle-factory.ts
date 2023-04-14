import { DB } from '../db/db';
import { OracleDB } from '../db/oracle-db';
import { DBFactory } from './db-factory';

export class OracleFactory implements DBFactory {
  getDatabase(): DB {
    return new OracleDB();
  }
}
