import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from './../interfaces';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: IRecipe = {};
  @Output() recipeSelected = new EventEmitter<IRecipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(): void {
    this.recipeSelected.emit(this.recipe);
  }

}
