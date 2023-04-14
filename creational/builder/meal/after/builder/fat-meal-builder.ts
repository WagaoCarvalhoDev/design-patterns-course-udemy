import { FastFoodMealBuilder } from './fast-food-meal-builder';

export class FatMealBuilder extends FastFoodMealBuilder {
  buildDrink(): void {
    this.meal.drink = 'MilkShake';
  }
  buildMain(): void {
    this.meal.main = 'TripleCheddarBaconBurguer';
  }
  buildSide(): void {
    this.meal.side = 'Onion Rings';
  }
  buildDessert(): void {
    this.meal.dessert = 'Large IceCream"';
  }
  buildGift(): void {
    this.meal.toy = 'Hospital pass';
  }
}
