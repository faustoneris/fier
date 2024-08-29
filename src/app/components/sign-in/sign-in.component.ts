import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Credentials } from '../../models/login.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: Credentials = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService) {}

  onLogin() {
    this.loginService.login(this.user)
  }
}
