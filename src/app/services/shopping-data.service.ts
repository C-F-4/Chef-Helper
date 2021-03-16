import { Injectable } from '@angular/core';
import { IIngredient } from './../interfaces';
import { Ingredient } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  private _ingredients: IIngredient[] = [];

  constructor() {
    this.initData();
  }

  private initData(): void {
    this.ingredients = [
      new Ingredient('Item 0', 1),
      new Ingredient('Item 1', 2),
    ];
  }

  public get ingredients(): IIngredient[] {
    return this._ingredients;
  }

  public set ingredients(ingredients: IIngredient[]) {
    this._ingredients = ingredients;
  }

  public getIngredientById(id: string): IIngredient {
    const ing = this.ingredients.find(el => el.id === id);
    if (!ing) {
      throw new Error(`Ingredient Not Found: ${id}`);
    }
    return ing;
  }

  public addIngredient(ingredient: IIngredient): IIngredient[] {
    this._ingredients.push(ingredient);
    return this.ingredients;
  }

  public updateIngredient(ingredient: IIngredient): IIngredient[] {
    if (!ingredient?.id) {
      throw new Error('ValidationError: Cant update ingredient');
    }
    const elIdx = this.ingredients.findIndex(el => el.id === ingredient.id);
    this.ingredients[elIdx] = ingredient;
    return this.ingredients;
  }

  public deleteIngredient(ingredient: IIngredient): IIngredient[] {
    if (!ingredient?.id) {
      throw new Error('ValidationError: Cant delete ingredient');
    }
    const elIdx = this.ingredients.findIndex(el => el.id === ingredient.id);
    this.ingredients.splice(elIdx, 1);
    return this.ingredients;
  }

}
