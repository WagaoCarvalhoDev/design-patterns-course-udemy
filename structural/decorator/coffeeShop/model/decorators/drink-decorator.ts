import { Drink } from '../drink';

export abstract class DrinkDecorator implements Drink {
  protected drink: Drink;

  constructor(drink: Drink) {
    this.drink = drink;
  }
  serve(): void {
    throw new Error('Method not implemented.');
  }
  getPrice(): number {
    throw new Error('Method not implemented.');
  }
}
