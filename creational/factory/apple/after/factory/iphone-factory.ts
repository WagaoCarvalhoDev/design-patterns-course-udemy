import { Iphone } from '../model/Iphone';

export abstract class IphoneFactory {
  protected abstract createIphone(): Iphone;

  orderIphone(): Iphone {
    const device = this.createIphone();

    device.getHardware();
    device.assemble();
    device.certificates();
    device.pack();

    return device;
  }
}
