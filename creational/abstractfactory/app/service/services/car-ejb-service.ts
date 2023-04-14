import { CarService } from './car-service';

export class CarEJBService implements CarService {
  save(model: string): void {
    console.log('Saving ' + model + " car through EJB's interface");
  }
  update(newModel: string): void {
    console.log('Updating ' + newModel + " car through EJB's interface");
  }
}
