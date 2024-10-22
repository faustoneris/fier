import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../app/services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken()

    console.log('INTERCEPTOR!')

    if (token && this.authService.isTokenExpired(token)) {
      this.authService.logout(); 
    }

    return next.handle(req)
  }
}
