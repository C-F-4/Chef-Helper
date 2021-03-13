import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegistrationEnabled = false;
  username: string;
  isUsernameAvailable: boolean;
  isFormValid: boolean;
  isFormTouched: boolean;

  constructor() {
    // Check Server
    this.isRegistrationEnabled = true;
    this.username = '';
    this.isUsernameAvailable = false;
    this.isFormValid = false;
    this.isFormTouched = false;
  }

  ngOnInit(): void {
  }

  resetFormState() {
    this.isRegistrationEnabled = true;
    this.username = '';
    this.isUsernameAvailable = false;
    this.isFormValid = false;
    this.isFormTouched = false;
  }

  onUpdateUsername(event: Event) {
    this.isFormTouched = true;
    // Check username availability
    // this.username = (<HTMLInputElement>event.target).value;
    if (this.username && Math.random() > 0.5) {
      this.isUsernameAvailable = true;
      this.isFormValid = true;
    } else {
      this.isUsernameAvailable = false;
      this.isFormValid = false;
    }
  }

  onRegister() {
    console.log(`Registering ${this.username}`);
    this.resetFormState();
  }

}
