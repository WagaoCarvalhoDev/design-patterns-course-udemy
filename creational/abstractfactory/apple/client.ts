import { USRulesAbstractFactory } from './factory/abstractFactory/us-rules-abstract-factory';
import { IPhone11Factory } from './factory/iphone-11-factory';
import { IPhoneXFactory } from './factory/iphone-x-factory';
import { Iphone } from './model/iphone/iphone';

const rules = new USRulesAbstractFactory();
const iphoneXFactory = new IPhoneXFactory(rules);
const iphone11Factory = new IPhone11Factory(rules);

console.log('### Ordering an iPhone X');
const iphone: Iphone = iphoneXFactory.orderIphone('standard');
console.log(iphone);

console.log('\n\n### Ordering an iPhone 11 HighEnd');
const iphone2: Iphone = iphone11Factory.orderIphone('highEnd');
console.log(iphone2);
