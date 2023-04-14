import { FastFoodMealBuilder } from './fast-food-meal-builder';

export class JustFriesBuilder extends FastFoodMealBuilder {
  buildDrink(): void {
    // no drink
  }
  buildMain(): void {
    // no main
  }
  buildSide(): void {
    this.meal.side = 'Large Fries';
  }
  buildDessert(): void {
    // no dessert
  }
  buildGift(): void {
    // no gift
  }
}
