import { FastFoodMeal } from '../fast-food-meal';

export class FastFoodMealBuilder {
  //Mandatory
  private _side: string;

  //Optionals
  private _drink = String('Sem bebida');
  private _main = String('Sem');
  private _dessert = String('Sem');
  private _gift = String('Sem');

  constructor(side: string) {
    this._side = side;
  }

  forDrink(drink: string): FastFoodMealBuilder {
    this._drink = drink;
    return this;
  }

  andMain(main: string): FastFoodMealBuilder {
    this._main = main;
    return this;
  }

  andDessert(dessert: string): FastFoodMealBuilder {
    this._dessert = dessert;
    return this;
  }

  andGift(gift: string): FastFoodMealBuilder {
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
}
