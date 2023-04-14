import { CountryRulesAbstractFactory } from '../../factory/abstractFactory/country-rules-abstract-factory';
import { Iphone } from './iphone';

export class IphoneXSMax extends Iphone {
  constructor(rules: CountryRulesAbstractFactory) {
    super(rules);
  }

  getHardware(): void {
    console.log('Hardware list');
    console.log('\t- 6.5in Screen');
    console.log('\t- A12 Chipset');
    console.log('\t- 4Gb RAM');
    console.log('\t- 512Gb Memory');
  }
}
