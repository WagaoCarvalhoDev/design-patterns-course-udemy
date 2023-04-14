import { FastFoodMealBuilder } from './fast-food-meal-builder';

export class Menu2Builder extends FastFoodMealBuilder {
  buildDrink(): void {
    this.meal.drink = 'Water';
  }
  buildMain(): void {
    this.meal.main = 'VeggieBurguer';
  }
  buildSide(): void {
    this.meal.side = 'Salad';
  }
  buildDessert(): void {
    this.meal.dessert = 'Apple';
  }
  buildGift(): void {
    this.meal.toy = "I'm Veggie's Stamp";
  }
}
