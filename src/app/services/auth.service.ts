import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken = 'authToken';
  private userCredentialsKey = 'userCredentials'

  constructor() {}

  setToken(jwtToken: string): void {
    sessionStorage.setItem(this.authToken, jwtToken);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.authToken);
  }

  userIsAuthenticated(): boolean {
    return !!this.getToken();
  }

  userLogout(): void {
    sessionStorage.removeItem(this.authToken);
    sessionStorage.removeItem(this.userCredentialsKey)
  }

  setCredentials(credentials: { cpf?: string; cnpj?: string; isClient: boolean }): void {
    sessionStorage.setItem(this.userCredentialsKey, JSON.stringify(credentials));
  }

  getCredentials(): { cpf?: string; cnpj?: string; isClient: boolean } | null {
    const credentials = sessionStorage.getItem(this.userCredentialsKey);
    return credentials ? JSON.parse(credentials) : null;
  }
}
