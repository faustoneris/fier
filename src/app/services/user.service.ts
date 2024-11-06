import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users' //Mudar a URL p BFF

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.url, user)
  }

  getUserById(userId: any): Observable<any> {
    return this.http.get<any>(`${this.url}/document/${userId}`)
  }
}
