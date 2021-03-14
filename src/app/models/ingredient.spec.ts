import { Ingredient } from './ingredient';

describe('Ingredient', () => {
  it('should create an instance', () => {
    expect(new Ingredient('item', 1)).toBeTruthy();
  });
});
