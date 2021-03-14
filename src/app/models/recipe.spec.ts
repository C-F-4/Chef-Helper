import { Recipe } from './recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe('T', 'D', new URL('https://picsum.photos/200/300.jpg'))).toBeTruthy();
  });
});
