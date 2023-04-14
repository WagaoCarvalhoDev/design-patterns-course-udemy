import { Iphone } from './Iphone';

export class Iphone11 extends Iphone {
  getHardware(): void {
    console.log('Hardware list');
    console.log('\t- 6.1in Screen');
    console.log('\t- A13 Chipset');
    console.log('\t- 4Gb RAM');
    console.log('\t- 256Gb Memory');
  }
}
