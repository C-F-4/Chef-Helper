import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from './../interfaces';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: IRecipe = {};

  constructor() { }

  ngOnInit(): void {
  }

}
