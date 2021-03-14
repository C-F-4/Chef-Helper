import { Component, Input, OnInit } from '@angular/core';
import { IIngredient } from './../interfaces';
import { Ingredient } from './../models';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Input() ingredient: IIngredient = {};

  constructor() {
    this.ingredient = new Ingredient('', 1);
  }

  ngOnInit(): void {
  }

}
