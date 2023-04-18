export class Card {
  constructor(private _userNumber: number, private _cardNumber: number) {}

  get userNumber(): number {
    return this._userNumber;
  }

  set userNumber(userNumber: number) {
    this._userNumber = userNumber;
  }

  get cardNumber(): number {
    return this._cardNumber;
  }

  set cardNumber(cardNumber: number) {
    this._cardNumber = cardNumber;
  }

  toString() {
    return (
      'Card [userNumber=' +
      this._userNumber +
      ', cardNumber=' +
      this._cardNumber +
      ']'
    );
  }
}
