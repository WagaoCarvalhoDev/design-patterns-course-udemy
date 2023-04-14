import { Iphone11 } from '../model/iphone/Iphone-11';
import { Iphone11Pro } from '../model/iphone/Iphone-11-pro';
import { Iphone } from '../model/iphone/iphone';
import { CountryRulesAbstractFactory } from './abstractFactory/country-rules-abstract-factory';
import { IPhoneFactory } from './iphone-factory';

export class IPhone11Factory extends IPhoneFactory {
  constructor(rules: CountryRulesAbstractFactory) {
    super(rules);
  }

  public createIphone(level: string): Iphone {
    if (level.match('standard')) {
      return new Iphone11(this.rules);
    } else if (level.match('highEnd')) {
      return new Iphone11Pro(this.rules);
    } else throw Error('Dispositivo não encontrado');
  }
}
