import { Drink } from '../drink';
import { Expresso } from '../expresso';
import { Tea } from '../tea';
import { DoubleDrink } from './double-drink';
import { Milk } from './milk';

export class Client {
  static order(name: string, drink: Drink): void {
    console.log('Ordering a ' + name);
    drink.serve();
    console.log(drink.getPrice());
    console.log('--------------------');
  }
}

Client.order('Expresso', new Expresso());
Client.order('Tea', new Tea());
Client.order('Lungo', new DoubleDrink(new Expresso()));
Client.order('Cafe Au Lait', new Milk(new Expresso()));
Client.order('English Tea', new Milk(new Tea()));
