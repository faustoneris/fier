import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/authentication' //Mudar a URL para o BFF
  private token: any

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(payload: any) {
    return this.http.post<any>(`${this.apiUrl}`, payload)
      .subscribe(response => {
        if (response) { 
          const token = response.access_token
  
          if (token) {
            localStorage.setItem('token', token)
            this.router.navigate(['/']);
          }
        } else {
            alert('usuario e/ou senha invalidos')
        }
      })
  }

  isLoggedIn(): any /* boolean */ {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('token')

      return token && !this.jwtHelper.isTokenExpired(token)
      
    }
    return false
  }

  isTokenExpired(token: string): boolean {
    const decoded: any = jwt_decode.jwtDecode(token)
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp < now
  }
  

  getRole(): 'SUPPLIER' | 'CUSTOMER' | null {
    const token = localStorage.getItem('token');
    if (!token || this.jwtHelper.isTokenExpired(token)) return null;

    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.loginType;
  }

  logout() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
  
  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }
}
