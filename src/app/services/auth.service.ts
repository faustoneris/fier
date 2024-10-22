import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/authentication' //Mudar a URL para o BFF
  private token: any

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(payload: any) {
    return this.http.post<any>(`${this.apiUrl}`, payload)
      .subscribe(response => {
        this.token = response.access_token
        localStorage.setItem('token', this.token)
        this.router.navigate(['/'])
      })
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') { 
      return !!this.token || !!localStorage.getItem('token')
    }
    return false
  }

  isTokenExpired(token: string): boolean {
    const decoded: any = jwt_decode.jwtDecode(token)
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp < now
  }
  

  getRole(): 'SUPPLIER' | 'CUSTOMER' | null {
    const token = this.token || localStorage.getItem('token')
    if (!token || this.isTokenExpired(token)) return null

    const decoded: any = jwt_decode.jwtDecode(token)
    console.log('Decoded token:', decoded)
    return decoded.loginType
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  
  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }
}
