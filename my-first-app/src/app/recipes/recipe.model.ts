import {Ingredient } from '../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: String;
  public imagepath: String;
  public ingredients: Ingredient[];

  constructor(name: string, desc: String, imagepath: String, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagepath = imagepath;
    this.ingredients = ingredients;    
  }
}