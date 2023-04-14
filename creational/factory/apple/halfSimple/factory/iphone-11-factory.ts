import { Iphone } from '../model/Iphone';
import { Iphone11 } from '../model/Iphone-11';
import { Iphone11Pro } from '../model/Iphone-11-pro';
import { IphoneFactory } from './iphone-factory';

export class Iphone11Factory extends IphoneFactory {
  public createIphone(level: string): Iphone {
    if (level.match('standart')) {
      return new Iphone11();
    } else if (level.match('highEnd')) {
      return new Iphone11Pro();
    } else {
      throw Error('Dispositivo não conhecido');
    }
  }
}
