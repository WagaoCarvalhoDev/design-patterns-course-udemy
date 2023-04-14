import { Connection } from './connection';

export class ConnectionPool {
  static poolSize = 2;
  private static connectionsPool: Array<Connection> = [];

  static {
    console.log('Creating Connection Pool');
    this.connectionsPool = new Array<Connection>();

    for (let i = 0; i < ConnectionPool.poolSize; i++) {
      this.connectionsPool.push(new Connection());
    }
  }

  public ConnectionPool() {
    console.log('Creating Connection Pool');
  }

  getConnection(): Connection {
    let avaiable: Connection = new Connection();

    for (const conn of ConnectionPool.connectionsPool) {
      if (!conn.isInUse()) {
        avaiable = conn;
        return avaiable;
      }
    }
    if (avaiable === null) {
      console.log('No Connections avaiable');
      return avaiable;
    }
    avaiable.setInUse(true);
    return avaiable;
  }

  leaveConnection(conn: Connection) {
    conn.setInUse(false);
  }
}
