import { CountryRulesAbstractFactory } from '../../factory/abstractFactory/country-rules-abstract-factory';
import { Iphone } from './iphone';

export class Iphone11 extends Iphone {
  constructor(rules: CountryRulesAbstractFactory) {
    super(rules);
  }

  getHardware(): void {
    console.log('Hardware list');
    console.log('\t- 6.1in Screen');
    console.log('\t- A13 Chipset');
    console.log('\t- 4Gb RAM');
    console.log('\t- 256Gb Memory');
  }
}
