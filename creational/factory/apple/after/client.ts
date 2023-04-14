import { Iphone11ProFactory } from './factory/iphone-11-pro-factory';
import { IphoneFactory } from './factory/iphone-factory';
import { IphoneXFactory } from './factory/iphone-x-factory';
import { Iphone } from './model/Iphone';

const iphoneXFactory: IphoneFactory = new IphoneXFactory();
const iphone11ProFactory: IphoneFactory = new Iphone11ProFactory();

console.log('### Ordering an iPhone X');
const iphone: Iphone = iphoneXFactory.orderIphone();
console.log(iphone);

console.log('\n\n### Ordering an iPhone 11 HighEnd');
const iphone2: Iphone = iphone11ProFactory.orderIphone();
console.log(iphone2);
