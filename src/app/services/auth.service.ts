import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken = 'authToken' 

  constructor() {}

  setToken(jwtToken: string): void {
    sessionStorage.setItem(this.authToken, jwtToken)
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.authToken)
  }

  userIsAuthenticated(): boolean {
    return !!this.getToken()
  }

  userLogout(): void {
    sessionStorage.removeItem(this.authToken)
  }
}
