import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {  Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
    

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
        new Recipe('a test Recipe', 'this is simply a test', 'https://homemaderecipes.com/wp-content/uploads/2015/04/easy-kid-friendly-recipes-01.jpg',
        [
           new Ingredient('Meat',1,20),
           new Ingredient ('french fries', 20,10)

        ]),
        new Recipe('big fat burger', 'this is simply a test', 'https://homemaderecipes.com/wp-content/uploads/2015/04/easy-kid-friendly-recipes-01.jpg',
        [
            new Ingredient('Buns',2,25),   
            new Ingredient('Meat',1,14),
        ])
      ]; 
   
    constructor(private slSerivce: ShoppingListService) {}

   getRecipes() {
       return this.recipes.slice();
   }
   
   getRecipe(index: number) {
       return this.recipes[index];
   }   

   addIngredientsToShoppinglist(ingredient: Ingredient[]) {
       this.slSerivce.addIngredients(ingredient);
   }
   addRecipe(recipe: Recipe) {
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice());
   }
   
   updateRecipe(index: number, newRecipe: Recipe) {
       this.recipes[index] = newRecipe;
       this.recipesChanged.next(this.recipes.slice());
   } 
   deleteRecipe(index: number) {
       this.recipes.splice(index, 1);
       this.recipesChanged.next(this.recipes.slice());
   }
}

 