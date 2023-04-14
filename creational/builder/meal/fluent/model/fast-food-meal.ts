export class FastFoodMeal {
  constructor(
    private _drink: string,
    private _main: string,
    private _side: string,
    private _dessert: string,
    private _gift: string,
  ) {}

  get drink(): string {
    return this._drink;
  }

  set drink(drink: string) {
    this._drink = drink;
  }

  get main() {
    return this._main;
  }

  set main(main: string) {
    this._main = main;
  }

  get side() {
    return this._side;
  }

  set side(side: string) {
    this._side = side;
  }

  get dessert() {
    return this._dessert;
  }

  set dessert(dessert: string) {
    this._dessert = dessert;
  }

  get toy() {
    return this._gift;
  }

  set toy(toy: string) {
    this._gift = toy;
  }

  toString() {
    return `Combo [drink= ${this.drink} , main= ${this.main} , side= ${this.side} , dessert= ${this.dessert} , gift= ${this.toy} ]`;
  }
}
