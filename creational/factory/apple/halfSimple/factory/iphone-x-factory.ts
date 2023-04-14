import { Iphone } from '../model/Iphone';
import { IphoneX } from '../model/Iphone-x';
import { IphoneXSMax } from '../model/Iphone-xs-max';
import { IphoneFactory } from './iphone-factory';

export class IPhoneXFactory extends IphoneFactory {
  public createIphone(level: string): Iphone {
    if (level.match('standard')) {
      return new IphoneX();
    } else if (level.match('highEnd')) {
      return new IphoneXSMax();
    } else {
      throw Error('Dispositivo não conhecido');
    }
  }
}
