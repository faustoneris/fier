import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Credentials } from '../../models/login.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isClient = true

  user = {
    cnpj: '',
    cpf: '',
    password: '',
    isClient: this.isClient,
  }

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    let payload: Credentials;

    if (this.isClient) {
      payload = {
        isClient: true,
        cpf: this.user.cpf,
        password: this.user.password
      };
    } else {
      payload = {
        isClient: false,
        cnpj: this.user.cnpj,
        password: this.user.password
      };
    }

    this.loginService.login(payload).subscribe({
      next: () => {
        this.router.navigate(['/list-products'])
      },
      error: (err) => {
        console.error('Login falhou:', err.message)
      }
    });
  }
}
