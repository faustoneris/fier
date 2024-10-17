import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Credentials, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = '' //endpoint de login precisa retornar o jwt

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }

  login(credentials: Credentials) {
    return this.userService.authenticate(credentials).subscribe({
      next: (response) => {
        // Aqui você pode armazenar o token em algum lugar (como localStorage)
        console.log('Usuario logado com sucesso! Token:', response.jwt);
      },
      error: (err) => {
        console.error(err.message); // Exibe erro se as credenciais forem inválidas
      }
    });
  }

/*   login(credentials: Credentials) {
    return this.http.post<LoginResponse>(this.url, credentials).subscribe(response => {
      this.authService.setToken(response.jwt)
    })
  } */
}
