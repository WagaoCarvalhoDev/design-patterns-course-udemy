import { Iphone } from '../model/Iphone';
import { Iphone11Pro } from '../model/Iphone-11-pro';
import { IphoneFactory } from './iphone-factory';

export class Iphone11ProFactory extends IphoneFactory {
  protected createIphone(): Iphone {
    return new Iphone11Pro();
  }
}
