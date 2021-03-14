import { Component, OnInit } from '@angular/core';
import { ViewMode } from './../enums';
import { IIngredient } from './../interfaces';
import { Ingredient } from './../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public viewMode: ViewMode;
  public ingredients: IIngredient[];
  public selectedIngredient: IIngredient = {};

  constructor() {
    this.viewMode = ViewMode.ListView;
    this.ingredients = [];
  }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(): void {
    this.ingredients = [
      new Ingredient('Item 0', 1),
      new Ingredient('Item 1', 2),
    ];
  }

  onIngredientChanged(ingredient: IIngredient): void {
    this.selectedIngredient = ingredient;
  }

  ingredientAdded(ingredient: IIngredient): void {
    this.ingredients.push(ingredient);
  }

  ingredientUpdated(ingredient: IIngredient): void {
    const updatedIndex = this.ingredients.findIndex(el => el.id === ingredient.id);
    this.ingredients[updatedIndex] = ingredient;
  }

  ingredientDeleted(ingredient: IIngredient): void {
    const updatedIndex = this.ingredients.findIndex(el => el.id === ingredient.id);
    this.ingredients.splice(updatedIndex, 1);
  }

}
