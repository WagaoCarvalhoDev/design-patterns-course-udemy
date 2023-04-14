import { CarEJBService } from '../services/car-ejb-service';
import { CarService } from '../services/car-service';
import { UserEJBService } from '../services/user-ejb-service';
import { UserService } from '../services/user-service';
import { ServicesAbstractFactory } from './services-abstract-factory';

export class EJBAbstractFactory implements ServicesAbstractFactory {
  getUserService(): UserService {
    return new UserEJBService();
  }
  getCarService(): CarService {
    return new CarEJBService();
  }
}
