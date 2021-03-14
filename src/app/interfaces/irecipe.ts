export interface IRecipe {
  id?: string;
  name?: string;
  description?: string;
  iconSrc?: URL;
  headerSrc?: URL;
  timeToCreate?: Date;
  dateCreated?: Date;
  dateModified?: Date;
}
