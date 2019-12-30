import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient'

@Injectable({
  providedIn:"root"
})
export class ShoppingListService {
  private  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Sugar', 25)
  ];
  constructor() { }

  IngredientAdded = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngreedient(ing: Ingredient){
    this.ingredients.push(ing);
    this.IngredientAdded.emit(this.ingredients.slice());
  }

   addIngreedients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);// Spread Operator(...) it's used to convert Array of elements into list of single elements
    this.IngredientAdded.emit(this.ingredients.slice());
  }

}