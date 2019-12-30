import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.IngredientAdded.subscribe(
      (ing: Ingredient[])=>{
      this.ingredients = ing;
    });
  }

  onAddIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}