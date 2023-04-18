import { Drink } from './drink';

export class Expresso implements Drink {
  serve(): void {
    console.log('- Adding 50ml of expresso');
  }
  getPrice(): number {
    return 1.5;
  }
}
