import { Iphone } from '../model/Iphone';
import { Iphone11 } from '../model/Iphone-11';
import { IphoneFactory } from './iphone-factory';

export class Iphone11Factory extends IphoneFactory {
  protected createIphone(): Iphone {
    return new Iphone11();
  }
}
