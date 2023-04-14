import { DB } from '../db/db';
import { PostgresDB } from '../db/postgres-db';
import { DBFactory } from './db-factory';

export class PostgresFactory implements DBFactory {
  getDatabase(): DB {
    return new PostgresDB();
  }
}
