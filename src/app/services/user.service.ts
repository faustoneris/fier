import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users/authentication/create'

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.url, user)
  }
}
