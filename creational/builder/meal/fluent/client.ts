import { FastFoodMealBuilder } from './model/builder/fast-food-meal-builder';

const burguerCombo = new FastFoodMealBuilder('Fries')
  .andMain('CheeseBurger')
  .forDrink('Code')
  .thatsAll()
  .toString();

console.log(burguerCombo);

const justFries = new FastFoodMealBuilder('Fries').thatsAll().toString();

console.log(justFries);

const heartAtackCombo = new FastFoodMealBuilder('Large Fries')
  .andMain('Monster Burguer')
  .forDrink('Milk Shake')
  .andDessert('Fudge Cake')
  .andGift('2 Kilograms')
  .thatsAll()
  .toString();

console.log(heartAtackCombo);
