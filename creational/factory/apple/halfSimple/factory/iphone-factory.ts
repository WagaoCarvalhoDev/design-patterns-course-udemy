import { Iphone } from '../model/Iphone';

export abstract class IphoneFactory {
  public abstract createIphone(level: string): Iphone;

  orderIphone(level: string): Iphone {
    const device = this.createIphone(level);

    device.getHardware();
    device.assemble();
    device.certificates();
    device.pack();

    return device;
  }
}
