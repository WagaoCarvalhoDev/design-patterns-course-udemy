import { CarService } from '../services/car-service';
import { UserService } from '../services/user-service';

export interface ServicesAbstractFactory {
  getUserService(): UserService;
  getCarService(): CarService;
}
