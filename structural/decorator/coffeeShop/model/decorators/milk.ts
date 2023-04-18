import { Drink } from '../drink';
import { DrinkDecorator } from './drink-decorator';

export class Milk extends DrinkDecorator {
  constructor(drink: Drink) {
    super(drink);
  }

  serve(): void {
    this.drink.serve();
    console.log('- Adding 30ml of Milk');
  }

  getPrice(): number {
    return this.drink.getPrice() + 0.5;
  }
}
