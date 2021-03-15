import { Component, OnInit } from '@angular/core';
import { ViewMode } from './../enums';
import { IIngredient } from './../interfaces';
import { Ingredient } from './../models';
import { ShoppingDataService } from '../services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public viewMode: ViewMode;
  public ingredients: IIngredient[];
  public selectedIngredient: IIngredient = {};

  constructor(private shoppingDataService: ShoppingDataService) {
    this.viewMode = ViewMode.ListView;
    this.ingredients = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.ingredients = this.shoppingDataService.ingredients;
  }

  onIngredientChanged(ingredient: IIngredient): void {
    this.selectedIngredient = ingredient;
  }

  ingredientAdded(ingredient: IIngredient): void {
    this.ingredients = this.shoppingDataService.addIngredient(ingredient);
  }

  ingredientUpdated(ingredient: IIngredient): void {
    this.ingredients = this.shoppingDataService.updateIngredient(ingredient);
  }

  ingredientDeleted(ingredient: IIngredient): void {
    this.ingredients = this.shoppingDataService.deleteIngredient(ingredient);
  }

}
