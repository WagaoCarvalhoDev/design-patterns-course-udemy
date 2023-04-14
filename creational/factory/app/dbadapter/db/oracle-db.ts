import { DB } from './db';

export class OracleDB implements DB {
  query(sql: string): void {
    console.log(`Querying " + ${sql} + " in Oracle database`);
  }
  update(sql: string): void {
    console.log(`Uptade querry " + ${sql} + " in Oracle database`);
  }
}
