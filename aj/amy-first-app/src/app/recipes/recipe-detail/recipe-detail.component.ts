import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // console.log(this.recipe);    
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id']; //+ is used for convert string into number bcz params takes as a string
        this.recipe = this.recipeService.getRecipe(this.id);
      }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}