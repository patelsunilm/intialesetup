import { Component, OnInit, OnDestroy ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode= false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing
     .subscribe(
      (index: number) => {
      this.editItemIndex = index;    
      this.editMode = true;
      this.editItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editItem.name,
        quantity: this.editItem.quantity,
        price: this.editItem.price
      })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.quantity, value.price);
    if (this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    }else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
 
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  
  onDelete() {
    this.slService.deletIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
