import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from './../interfaces';

export class Ingredient implements IIngredient {
  public id: string;
  public dateCreated: Date;
  public dateModified: Date;

  constructor(public name: string, public quantity: number) {
    this.id = uuidv4();
    this.dateCreated = new Date();
    this.dateModified = new Date();
  }
}
