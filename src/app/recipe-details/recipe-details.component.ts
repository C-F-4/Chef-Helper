import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IRecipe } from './../interfaces';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: IRecipe = {};
  @ViewChild('actionMenuToggle') actionMenuRef: ElementRef;

  readonly toggleClass = 'show';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  toggleClassOn(value: string, elRef: ElementRef, className: string): void {
    if (value === 'true') {
      this.renderer.addClass(elRef.nativeElement, className);
    } else {
      this.renderer.removeClass(elRef.nativeElement, className);
    }
  }

}
