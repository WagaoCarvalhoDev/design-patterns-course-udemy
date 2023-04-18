import { CallCenterFacade } from './facade/call-center-facade';
import { Card } from './model/card';

const facade = new CallCenterFacade();

const card: Card = facade.getCardByUser(123456);
console.log(card);

facade.getSumary(card);
facade.getPaymentInfoByCard(card);
facade.cancelLastRegister(card);

const newCard: Card = facade.getCardByUser(123456);
console.log(newCard);
