import { FastFoodMeal } from './model/fast-food-meal';

const burguerCombo = new FastFoodMeal.Builder('Fries')
  .andMain('CheeseBurger')
  .forDrink('Code')
  .thatsAll()
  .toString();

console.log(burguerCombo);

const justFries = new FastFoodMeal.Builder('Fries').thatsAll().toString();

console.log(justFries);

const heartAtackCombo = new FastFoodMeal.Builder('Large Fries')
  .andMain('Monster Burguer')
  .forDrink('Milk Shake')
  .andDessert('Fudge Cake')
  .andGift('2 Kilograms')
  .thatsAll()
  .toString();

console.log(heartAtackCombo);
