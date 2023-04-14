import { Iphone } from '../model/iphone/iphone';
import { CountryRulesAbstractFactory } from './abstractFactory/country-rules-abstract-factory';

export abstract class IPhoneFactory {
  rules: CountryRulesAbstractFactory;
  constructor(rules: CountryRulesAbstractFactory) {
    this.rules = rules;
  }

  protected abstract createIphone(level: string): Iphone;

  orderIphone(level: string): Iphone {
    const device: Iphone = this.createIphone(level);

    if (device != null) {
      device.getHardware();
      device.assemble();
      device.certificates();
      device.pack();
    }
    return device;
  }
}
