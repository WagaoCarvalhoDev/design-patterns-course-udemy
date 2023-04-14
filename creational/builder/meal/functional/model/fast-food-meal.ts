export class FastFoodMeal {
  constructor(
    private readonly _drink: string,
    private readonly _main: string,
    private readonly _side: string,
    private readonly _dessert: string,
    private readonly _gift: string,
  ) {}

  get drink(): string {
    return this._drink;
  }

  get main() {
    return this._main;
  }

  get side() {
    return this._side;
  }

  get dessert() {
    return this._dessert;
  }

  get toy() {
    return this._gift;
  }

  toString() {
    return `Combo [drink= ${this.drink} , main= ${this.main} , side= ${this.side} , dessert= ${this.dessert} , gift= ${this.toy} ]`;
  }

  static Builder = class {
    //Mandatory
    private _side: string;

    //Optionals
    private _drink = String();
    private _main = String();
    private _dessert = String();
    private _gift = String();

    constructor(side: string) {
      this._side = side;
    }

    forDrink(drink: string) {
      this._drink = drink;
      return this;
    }

    andMain(main: string) {
      this._main = main;
      return this;
    }

    andDessert(dessert: string) {
      this._dessert = dessert;
      return this;
    }

    andGift(gift: string) {
      this._gift = gift;
      return this;
    }

    thatsAll(): FastFoodMeal {
      return new FastFoodMeal(
        this._drink,
        this._main,
        this._side,
        this._dessert,
        this._gift,
      );
    }
  };
}
