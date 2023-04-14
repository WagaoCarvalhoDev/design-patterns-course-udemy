import { IphoneX } from '../model/iphone/Iphone-x';
import { IphoneXSMax } from '../model/iphone/Iphone-xs-max';
import { Iphone } from '../model/iphone/iphone';
import { CountryRulesAbstractFactory } from './abstractFactory/country-rules-abstract-factory';
import { IPhoneFactory } from './iphone-factory';

export class IPhoneXFactory extends IPhoneFactory {
  constructor(rules: CountryRulesAbstractFactory) {
    super(rules);
  }

  public createIphone(level: string): Iphone {
    if (level.match('standard')) {
      return new IphoneX(this.rules);
    } else if (level.match('highEnd')) {
      return new IphoneXSMax(this.rules);
    } else throw Error('Dispositivo não encontrado');
  }
}
