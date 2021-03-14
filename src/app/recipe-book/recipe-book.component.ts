import { Component, OnInit } from '@angular/core';
import { ViewMode } from './../enums/view-mode.enum';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

  viewMode: ViewMode;

  constructor() {
    this.viewMode = ViewMode.ListView;
  }

  ngOnInit(): void {
  }

}
