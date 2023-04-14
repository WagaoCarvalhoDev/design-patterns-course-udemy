import { FastFoodMealBuilder } from '../builder/fast-food-meal-builder';
import { FastFoodMeal } from '../model/fast-food-meal';

export class MealDirector {
  private builder: FastFoodMealBuilder;

  constructor(builder: FastFoodMealBuilder) {
    this.builder = builder;
  }

  constructCombo() {
    this.builder.buildDrink();
    this.builder.buildMain();
    this.builder.buildSide();
    this.builder.buildDessert();
    this.builder.buildGift();
  }

  getCombo(): FastFoodMeal {
    return this.builder.meal;
  }
}
