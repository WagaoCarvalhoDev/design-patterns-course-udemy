import { Iphone } from '../model/Iphone';
import { IphoneXSMax } from '../model/Iphone-xs-max';
import { IphoneFactory } from './iphone-factory';

export class IphoneXSFactory extends IphoneFactory {
  protected createIphone(): Iphone {
    return new IphoneXSMax();
  }
}
