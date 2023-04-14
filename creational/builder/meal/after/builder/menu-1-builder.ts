import { FastFoodMealBuilder } from './fast-food-meal-builder';

export class Menu1Builder extends FastFoodMealBuilder {
  buildDrink(): void {
    this.meal.drink = 'Coke';
  }
  buildMain(): void {
    this.meal.main = 'Cheeseburguer';
  }
  buildSide(): void {
    this.meal.side = 'Fries';
  }
  buildDessert(): void {
    this.meal.dessert = 'Apple Pie';
  }
  buildGift(): void {
    this.meal.toy = "Avenger's Toy";
  }
}
