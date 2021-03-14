import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'menubook';
  public selectedPage = '';

  constructor() { }

  ngOnInit(): void { }

  onRouteChange(pagePath: string): void {
    this.selectedPage = pagePath;
  }

}
