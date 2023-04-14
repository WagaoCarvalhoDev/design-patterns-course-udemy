import { CarRestApiService } from '../services/car-rest-api-service';
import { CarService } from '../services/car-service';
import { UserRestApiService } from '../services/user-rest-api-service';
import { UserService } from '../services/user-service';
import { ServicesAbstractFactory } from './services-abstract-factory';

export class RestAbstractFactory implements ServicesAbstractFactory {
  getUserService(): UserService {
    return new UserRestApiService();
  }
  getCarService(): CarService {
    return new CarRestApiService();
  }
}
