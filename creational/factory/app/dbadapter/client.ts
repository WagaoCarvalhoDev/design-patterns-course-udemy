import { OracleFactory } from './factory/oracle-factory';

const db = new OracleFactory().getDatabase();
db.query('SELECT * FROM users');
db.update('INSERT INTO users VALUES ("User", 25)');
