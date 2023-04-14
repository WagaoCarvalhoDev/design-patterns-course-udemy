import { Iphone } from '../model/Iphone';
import { Iphone11 } from '../model/Iphone-11';
import { Iphone11Pro } from '../model/Iphone-11-pro';
import { IphoneX } from '../model/Iphone-x';
import { IphoneXSMax } from '../model/Iphone-xs-max';

export class IPhoneSimpleFactory {
  public static orderIphone(generation: string, level: string): Iphone {
    let device: Iphone = new Iphone11();

    if (generation.match('X')) {
      if (level.match('standard')) {
        device = new IphoneX();
      } else if (level.match('highEnd')) {
        device = new IphoneXSMax();
      }
    } else if (generation.match('11')) {
      if (level.match('standard')) {
        device = new Iphone11();
      } else if (level.match('highEnd')) {
        device = new Iphone11Pro();
      }
    }

    if (device != null) {
      device.getHardware();
      device.assemble();
      device.certificates();
      device.pack();
    }

    return device;
  }
}
