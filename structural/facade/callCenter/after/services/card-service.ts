import { Card } from '../model/card';

export class CardService {
  private _memory: Map<number, Card>;
  constructor() {
    this._memory = new Map();
    this._memory.set(123456, new Card(123456, 11223344));
  }

  getCardByUser(l: number) {
    return this._memory.get(l);
  }

  removedCard(card: Card) {
    this._memory.delete(card.userNumber);
  }

  createNewCard(user: number, cardNumber: number) {
    const newCard = new Card(user, cardNumber);
    this._memory.set(user, newCard);
    console.log('Creating the new card: ' + newCard);
    return newCard;
  }
}
