import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
 
export class ShoppingListService {
   ingredientsChanged = new Subject <Ingredient[]>();
   startedEditing = new Subject<number>()
   private ingredients: Ingredient[] = [
        new Ingredient('apples',5,12),
        new Ingredient('tomoatos',10,54),
      ];
    
getIngredients() {
       return this.ingredients.slice();
   }
getIngredient(index: number) {
       return this.ingredients[index];
   }

addIngredient(ingredient: Ingredient) {
       this.ingredients.push(ingredient);
       this.ingredientsChanged.next(this.ingredients.slice());
   }   

addIngredients(ingredient: Ingredient[]) {

      this.ingredients.push(...ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());   
}

updateIngredient(index: number,newIngredient: Ingredient) {
     this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
 }
 
deletIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
 }

}

