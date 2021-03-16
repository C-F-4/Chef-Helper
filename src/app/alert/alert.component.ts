import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from '../enums';
import { IAlert } from './../interfaces';
import { NotificationService } from './../services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertId: string;
  public alert: IAlert;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.alert = this.notificationService.getNotificationById(this.alertId);
    this.showAlert();
  }

  showAlert(): void {
    setTimeout(() => {
      this.alert.isActive = false;
      this.notificationService.removeNotification(this.alertId);
    }, this.alert.timeoutInSeconds);
  }

  getAlertClass(): string {
    if (this.alert.type === AlertType.formSuccess) {
      return 'alert-success';
    }
    return 'alert-error';
  }
}
