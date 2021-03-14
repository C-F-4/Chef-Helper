import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from './../interfaces';

export class Ingredient implements IIngredient {
  public id: string;

  constructor(public name: string, public quantity: number) {
    this.id = uuidv4();
  }
}
