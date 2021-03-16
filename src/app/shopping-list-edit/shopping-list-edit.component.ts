import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { IIngredient } from './../interfaces';
import { Ingredient } from './../models';
import { ShoppingDataService } from './../services';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, AfterViewInit {

  private _ingredientId: string;
  private isHtmlAvailable = false;

  get ingredientId() {
    return this._ingredientId;
  }
  @Input('ingredient')
  set ingredientId(_ingredientId: any) {
    this._ingredientId = _ingredientId;
    this.setIngredientWithId();
  }
  @Output() ingredientAdded = new EventEmitter<IIngredient>();
  @Output() ingredientUpdated = new EventEmitter<IIngredient>();
  @Output() ingredientDeleted = new EventEmitter<IIngredient>();
  @ViewChild('ingName') fieldIngNameRef: ElementRef;
  @ViewChild('ingQty') fieldIngQtyRef: ElementRef;

  ingredient: IIngredient = {};

  constructor(private shoppingDataService: ShoppingDataService, private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setIngredientWithId();
    this.isHtmlAvailable = true;
  }

  setIngredientWithId(): void {
    if (this.ingredientId) {
      this.ingredient = this.shoppingDataService.getIngredientById(this.ingredientId);
    } else {
      this.newItemForm();
    }
  }

  newItemForm(): void {
    console.log('Add Mode');
    this.clearState();
    if (this.isHtmlAvailable) {
      this.onFormReset();
    }
  }

  onFormSubmit(event: Event): void {
    if (this.ingredient.id) {
      this.ingredient.name = this.fieldIngNameRef.nativeElement.value;
      this.ingredient.quantity = this.fieldIngQtyRef.nativeElement.value;
      this.ingredient.dateModified = new Date();
      this.ingredientUpdated.emit(this.ingredient);
    } else {
      this.ingredient = new Ingredient(
        this.fieldIngNameRef.nativeElement.value,
        this.fieldIngQtyRef.nativeElement.value
      );
      this.ingredientAdded.emit(this.ingredient);
      this.newItemForm();
    }
  }

  onFormReset(event?: Event): void {
    this.renderer.setProperty(this.fieldIngNameRef.nativeElement, 'value', this.ingredient.name || '');
    this.renderer.setProperty(this.fieldIngQtyRef.nativeElement, 'value', this.ingredient.quantity || 0);
    // this.fieldIngQty.nativeElement.value = this.ingredient.quantity || '';
  }

  onFormDelete(event: Event): void {
    if (this.ingredient.id) {
      this.ingredientDeleted.emit(this.ingredient);
      this.clearState();
      this.onFormReset(event);
    } else {
      console.log('This is not a saved item. Cant Delete!');
    }
  }

  clearState(): void {
    this.ingredient = {};
  }
}
