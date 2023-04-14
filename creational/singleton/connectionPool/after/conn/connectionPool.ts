import { Connection } from './connection';

export class ConnectionPool {
  private static singleton = new ConnectionPool();
  static poolSize = 2;
  private connectionsPool: Array<Connection> = [];

  static getInstance(): ConnectionPool {
    if (!ConnectionPool.singleton) {
      return new ConnectionPool();
    }
    return ConnectionPool.singleton;
  }

  private constructor() {
    console.log('Creating Connection Pool');
    //this.connectionsPool = new Array<Connection>();

    for (let i = 0; i < ConnectionPool.poolSize; i++) {
      this.connectionsPool.push(new Connection());
    }
  }

  getConnection(): Connection {
    let avaiable: Connection | null = null;

    for (const conn of this.connectionsPool) {
      if (!conn.isInUse()) {
        avaiable = conn;
      } else {
        avaiable = null;
      }
    }
    if (avaiable === null) {
      console.log('No Connections avaiable');
    }
    if (avaiable != null) {
      avaiable.setInUse(true);
      return avaiable;
    }
  }

  leaveConnection(conn: Connection) {
    conn.setInUse(false);
  }
}
