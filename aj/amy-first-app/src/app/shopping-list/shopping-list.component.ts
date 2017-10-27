import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  totalamount: number = null;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );      
  }
 
  onEditItem(index: number) {
   this.slService.startedEditing.next(index);
  } 

  ngOnDestroy() {
   this.subscription.unsubscribe();
   }
   
   getTotal() {
    
    let total = 0;
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].quantity) {
        let t = 0;
        t = this.ingredients[i].quantity * this.ingredients[i].price;
        total += t;
        this.totalamount = total;
        localStorage.setItem('billamount', total.toString());
      }
    } 
    return total;
  }

}
