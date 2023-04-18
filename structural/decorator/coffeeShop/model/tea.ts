import { Drink } from './drink';

export class Tea implements Drink {
  serve(): void {
    console.log('- Adding 100ml of tea');
  }
  getPrice(): number {
    return 1;
  }
}
