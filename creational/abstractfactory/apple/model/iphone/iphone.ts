import { CountryRulesAbstractFactory } from '../../factory/abstractFactory/country-rules-abstract-factory';

export abstract class Iphone {
  rules: CountryRulesAbstractFactory;
  constructor(rules: CountryRulesAbstractFactory) {
    this.rules = rules;
  }
  abstract getHardware(): void;

  assemble(): void {
    console.log('Assembling all the hardwares');
  }

  certificates(): void {
    console.log('Testing all the certificates');
    console.log(this.rules.getCertificates().applyCertification());
  }

  pack(): void {
    console.log('Packing the device');
    console.log(this.rules.getPacking().pack());
  }
}
