import { EJBAbstractFactory } from './factory/ejb-abstract-factory';
import { ServicesAbstractFactory } from './factory/services-abstract-factory';

const factory: ServicesAbstractFactory = new EJBAbstractFactory();

const userService = factory.getUserService();
userService.save('Jhon');
userService.delete(5);

const carService = factory.getCarService();
carService.save('Prius');
carService.update('Tesla X');
