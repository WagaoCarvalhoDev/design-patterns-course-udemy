import { Connection } from './conn/connection';
import { ConnectionPool } from './conn/connectionPool';

export class Client {
  static doQuery1(): void {
    const pool: ConnectionPool = ConnectionPool.getInstance();
    const conn: Connection = pool.getConnection();
    if (conn != null) conn.query('SELECT * FROM A1');

    //pool.leaveConnection(conn);
  }
  static doQuery2(): void {
    const pool: ConnectionPool = ConnectionPool.getInstance();
    const conn: Connection = pool.getConnection();
    if (conn != null) conn.query('SELECT * FROM A2');

    //pool.leaveConnection(conn);
  }
  static doQuery3(): void {
    const pool: ConnectionPool = ConnectionPool.getInstance();
    const conn: Connection = pool.getConnection();
    if (conn != null) conn.query('SELECT * FROM A3');

    //pool.leaveConnection(conn);
  }
}
console.log('Connection Pool Size: ' + ConnectionPool.poolSize);
const pool: number = ConnectionPool.poolSize;
console.log(pool);

Client.doQuery1();
Client.doQuery2();
Client.doQuery3();
