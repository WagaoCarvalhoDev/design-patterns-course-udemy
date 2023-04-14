import { FastFoodMeal } from '../model/fast-food-meal';

export abstract class FastFoodMealBuilder {
  protected _meal: FastFoodMeal;

  constructor() {
    this._meal = new FastFoodMeal();
  }

  get meal() {
    return this._meal;
  }

  buildDrink(): void {}
  buildMain(): void {}
  buildSide(): void {}
  buildDessert(): void {}
  buildGift(): void {}
}
