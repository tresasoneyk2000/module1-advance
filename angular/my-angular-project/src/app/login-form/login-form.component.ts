import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  get usernameInvalid(): boolean {
    return this.username.trim().length === 0;
  }

  get passwordInvalid(): boolean {
    return this.password.trim().length === 0;
  }

  login(): void {
    // Simulated login functionality
    console.log('Logging in with username:', this.username, 'and password:', this.password);
  }

}
