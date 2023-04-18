import { Card } from '../model/card';
import { Register } from '../model/register';

export class RegisterService {
  private _memory: Map<number, Array<Register>>;
  constructor() {
    this._memory = new Map<number, Array<Register>>();
    this._memory.set(
      11223344,
      new Array<Register>(
        new Register('McDonalds', 15, new Date()),
        new Register('Pizza Hut', 25, new Date()),
        new Register('Nike Store', 50, new Date()),
      ),
    );
  }

  getRegistersByCard(card: Card): Array<Register> | undefined {
    return this._memory.get(card.cardNumber);
  }

  removeByIndex(card: Card, i: number): void {
    const list: Array<Register> | undefined = this._memory.get(card.cardNumber);
    const reg: Register[] | undefined = list?.splice(i);
    console.log(reg?.toString() + ' Deleted!');
    this._memory.set(card.cardNumber, list!);
  }

  deleteCardRegistries(card: Card) {
    this._memory.delete(card.cardNumber);
  }

  addCardRegisters(card: Card, registers: Array<Register>): void {
    console.log('Associating pending Registers to new Card!');
    this._memory.set(card.cardNumber, registers);
  }
}
