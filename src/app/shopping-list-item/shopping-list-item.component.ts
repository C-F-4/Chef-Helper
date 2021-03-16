import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IIngredient } from './../interfaces';
import { ShoppingDataService } from './../services';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('ingredient') ingredientId: string;
  @Output() ingredientSelected = new EventEmitter<string>();

  ingredient: IIngredient = {};

  constructor(private shoppingDataService: ShoppingDataService) { }

  ngOnInit(): void {
    this.ingredient = this.shoppingDataService.getIngredientById(this.ingredientId);
  }

  onIngredientSelected(): void {
    this.ingredientSelected.emit(this.ingredient.id);
  }

}
