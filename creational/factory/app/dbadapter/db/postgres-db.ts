import { DB } from './db';

export class PostgresDB implements DB {
  query(sql: string): void {
    console.log(`Querying " + ${sql} + " in Postgres database`);
  }
  update(sql: string): void {
    console.log(`Uptade querry " + ${sql} + " in Postgres database`);
  }
}
