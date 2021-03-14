import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IIngredient } from './../interfaces';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() ingredient: IIngredient = {};
  @Output() ingredientSelected = new EventEmitter<IIngredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientSelected(): void {
    this.ingredientSelected.emit(this.ingredient);
  }

}
