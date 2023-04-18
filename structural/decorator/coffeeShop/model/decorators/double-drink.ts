import { Drink } from '../drink';
import { DrinkDecorator } from './drink-decorator';

export class DoubleDrink extends DrinkDecorator {
  constructor(drink: Drink) {
    super(drink);
  }

  serve(): void {
    this.drink.serve();
    this.drink.serve();
  }

  getPrice(): number {
    return this.drink.getPrice() * 1.75;
  }
}
