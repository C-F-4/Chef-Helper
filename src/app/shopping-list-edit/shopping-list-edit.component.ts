import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { IIngredient } from './../interfaces';
import { Ingredient } from './../models';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @Input() ingredient: IIngredient = {};
  @Output() ingredientAdded = new EventEmitter<IIngredient>();
  @Output() ingredientUpdated = new EventEmitter<IIngredient>();
  @Output() ingredientDeleted = new EventEmitter<IIngredient>();
  @ViewChild('ingName') fieldIngNameRef: ElementRef;
  @ViewChild('ingQty') fieldIngQtyRef: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
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
      // this.clearState();
      // this.onFormReset(event);
    }
  }

  onFormReset(event: Event): void {
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
