import { EventEmitter,Injectable } from '@angular/core';
import {  Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('a test Recipe', 'this is simply a test', 'https://homemaderecipes.com/wp-content/uploads/2015/04/easy-kid-friendly-recipes-01.jpg',
        [
           new Ingredient('Meat',1),
           new Ingredient ('french fries', 20)

        ]),
        new Recipe('another test Recipe', 'this is simply a test', 'https://homemaderecipes.com/wp-content/uploads/2015/04/easy-kid-friendly-recipes-01.jpg',
        [
            new Ingredient('Buns',2),   
            new Ingredient('Meat',1),
        ])
      ]; 
   
    constructor(private slSerivce: ShoppingListService){}

   getRecipes(){
       return this.recipes.slice();
   }
   addIngredientsToShoppinglist(ingredients: Ingredient[]){
   this.slSerivce.addIngredients(ingredients);
   }
}
 