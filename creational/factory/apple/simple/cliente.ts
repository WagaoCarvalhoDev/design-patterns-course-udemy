import { IPhoneSimpleFactory } from './factory/iphone-simple-factory';

console.log('### Ordering an iPhone X');
const iPhone = IPhoneSimpleFactory.orderIphone('X', 'standard');
console.log(iPhone);

console.log('\n\n### Ordering an iPhone 11 HighEnd');
const iphone2 = IPhoneSimpleFactory.orderIphone('11', 'highEnd');
console.log(iphone2);
