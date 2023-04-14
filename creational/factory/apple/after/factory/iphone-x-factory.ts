import { Iphone } from '../model/Iphone';
import { IphoneX } from '../model/Iphone-x';
import { IphoneFactory } from './iphone-factory';

export class IphoneXFactory extends IphoneFactory {
  protected createIphone(): Iphone {
    return new IphoneX();
  }
}
