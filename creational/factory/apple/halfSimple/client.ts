import { Iphone11Factory } from './factory/iphone-11-factory';
import { IphoneFactory } from './factory/iphone-factory';
import { IPhoneXFactory } from './factory/iphone-x-factory';
import { Iphone } from './model/Iphone';

const iphoneXFactory: IphoneFactory = new IPhoneXFactory();
const iphone11Factory: IphoneFactory = new Iphone11Factory();

console.log('### Ordering an iPhone X');
const iphone: Iphone = iphoneXFactory.orderIphone('standard');
console.log(iphone);

console.log('\n\n### Ordering an iPhone 11 HighEnd');
const iphone2: Iphone = iphone11Factory.orderIphone('highEnd');
console.log(iphone2);
