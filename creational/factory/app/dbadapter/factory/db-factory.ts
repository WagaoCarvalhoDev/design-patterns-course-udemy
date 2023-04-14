import { DB } from '../db/db';

export interface DBFactory {
  getDatabase(): DB;
}
