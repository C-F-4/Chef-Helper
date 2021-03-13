import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  alertMessage: string;
  isAlertSuccess = true;

  constructor() {
    this.alertMessage = 'Alert';
    this.isAlertSuccess = true;
  }
}
