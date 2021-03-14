import { IRecipe } from './../interfaces';
import { v4 as uuidv4 } from 'uuid';

export class Recipe implements IRecipe {
  id: string;
  dateCreated: Date;
  dateModified: Date;
  name: string;
  description: string;
  iconSrc: URL;
  headerSrc: URL;

  constructor(
    name: string,
    description: string,
    iconSrc: URL,
    headerSrc?: URL
  ) {
    this.id = uuidv4();
    this.dateCreated = new Date();
    this.dateModified = new Date();

    this.name = name;
    this.description = description;
    this.iconSrc = iconSrc;
    if (headerSrc) {
      this.headerSrc = headerSrc;
    } else {
      this.headerSrc = iconSrc;
    }
  }
}
