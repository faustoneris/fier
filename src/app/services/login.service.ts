import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Credentials, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = '' //endpoint de login precisa retornar o jwt

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(credentials: Credentials) {
    return this.http.post<LoginResponse>(this.url, credentials).subscribe(response => {
      this.authService.setToken(response.jwt)
    })
  }
}
