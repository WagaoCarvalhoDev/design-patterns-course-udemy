import { FastFoodMealBuilder } from './builder/fast-food-meal-builder';
import { FatMealBuilder } from './builder/fat-meal-builder';
import { JustFriesBuilder } from './builder/just-fries-builder';
import { Menu1Builder } from './builder/menu-1-builder';
import { Menu2Builder } from './builder/menu-2-builder';
import { MealDirector } from './director/meal-director';

class Client {
  order(name: string, builder: FastFoodMealBuilder) {
    console.log('Ordering a ' + name);
    const director = new MealDirector(builder);
    director.constructCombo();
    console.log(director.getCombo().toString());

    console.log('---------------------------');
  }
}

const order = new Client();
order.order('Burguer', new Menu1Builder());
order.order('Veggie Burguer', new Menu2Builder());
order.order('Just Fries', new JustFriesBuilder());
order.order('Heart Atack', new FatMealBuilder());
