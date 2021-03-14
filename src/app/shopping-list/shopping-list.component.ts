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

}
