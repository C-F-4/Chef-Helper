import { IRecipe } from './../interfaces';
import { v4 as uuidv4 } from 'uuid';

export class Recipe implements IRecipe {
  id: string;
  dateCreated: Date;
  dateModified: Date;
  name: string;
  description: string;
  headerImg: URL;

  constructor(
    name: string,
    description: string,
    headerImg: URL
  ) {
    this.id = uuidv4();
    this.dateCreated = new Date();
    this.dateModified = new Date();

    this.name = name;
    this.description = description;
    this.headerImg = headerImg;
  }
}
