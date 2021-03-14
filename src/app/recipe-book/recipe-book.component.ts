import { Component, OnInit } from '@angular/core';
import { ViewMode } from './../enums';
import { IRecipe } from './../interfaces';
import { Recipe } from './../models';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

  public viewMode: ViewMode;
  public recipes: IRecipe[];
  public selectedRecipe: IRecipe = {};

  constructor() {
    this.viewMode = ViewMode.ListView;
    this.recipes = [];
  }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(): void {
    this.recipes = [
      new Recipe('Test Recipe', 'This is a sample recipe', new URL('https://picsum.photos/100/100.jpg')),
      new Recipe('Test Recipe II', 'This is a sample II recipe', new URL('https://picsum.photos/100/100.jpg'))
    ];
  }

  onRecipeChange(recipe: IRecipe): void {
    this.selectedRecipe = recipe;
  }

}
