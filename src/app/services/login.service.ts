import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Credentials, LoginResponse } from '../models/login.model';
import { UserService } from './user.service'; // Importar UserService
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = ''

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) {}

  login(credentials: Credentials): Observable<LoginResponse> {
    return new Observable(observer => {
      this.userService.authenticate(credentials).subscribe({
        next: (response) => {
          this.authService.setToken(response.jwt)
          this.authService.setCredentials(credentials)
          observer.next(response)
          observer.complete()
        },
        error: (err) => {
          observer.error(err)
        }
      })
    })
  }
}
