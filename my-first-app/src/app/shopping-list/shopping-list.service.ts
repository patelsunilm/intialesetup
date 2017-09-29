import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
 
export class ShoppingListService {
   ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('tomoatos',10 ),
      ];
    
   getIngredient(){
       return this.ingredients.slice();
   }
   addIngredient(ingredient: Ingredient){
       this.ingredients.push(ingredient);
       this.ingredientsChanged.emit(this.ingredients.slice());
   }   

   addIngredients(ingredient: Ingredient[]){

  this.ingredients.push(...ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());   
}
}
