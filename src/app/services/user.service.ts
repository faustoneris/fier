import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users/authentication/create'

  private users: User[] = []

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    this.users.push(user) 
    console.log(this.users)
    return of({ message: 'Usuario criado!'})
  }

  authenticate(credentials: { cpf?: string; cnpj?: string; password: string }): Observable<{ jwt: string }> {
    const user = this.users.find(u => 
      (credentials.cpf && u.cpf === credentials.cpf) || 
      (credentials.cnpj && u.cnpj === credentials.cnpj)
    );

    if (user && user.password === credentials.password) {
      return of({ jwt: 'JWT_TESTE' })
    }

    throw new Error('Credenciais inválidas')
  }

/*   createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.url, user)
  } */
}
