import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services';
import { IAlert } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'menubook';
  public selectedPage = '';
  public alert: IAlert = {};

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notify.subscribe((alert: IAlert) => {
      console.log(`Alert Added: ${alert.id}`);
      this.alert = alert;
    });
  }

  onRouteChange(pagePath: string): void {
    this.selectedPage = pagePath;
  }

}
