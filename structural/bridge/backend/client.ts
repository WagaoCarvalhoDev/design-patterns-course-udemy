import { UserMongoDao } from './dao/user-mongo-dao';
import { UserMysqlDao } from './dao/user-mysql-dao';
import { UserOracleDao } from './dao/user-oracle-dao';
import { UserPostgresDao } from './dao/user-postgres-dao copy';
import { User } from './model/user';
import { UserEJB } from './services/user-ejb';
import { UserRest } from './services/user-rest';
import { UserService } from './services/user-service';
import { UserSoap } from './services/user-soap';

const user = new User('user', 'user@email.com', 'passwd');

const userRestOracleService: UserService = new UserRest(new UserOracleDao());
userRestOracleService.save(user);

const userEJBMongoService: UserService = new UserEJB(new UserMongoDao());
userEJBMongoService.save(user);

const userSoapPostgresService: UserService = new UserSoap(
  new UserPostgresDao(),
);
userSoapPostgresService.save(user);

const userRestMysqlService: UserService = new UserRest(new UserMysqlDao());
userRestMysqlService.save(user);
