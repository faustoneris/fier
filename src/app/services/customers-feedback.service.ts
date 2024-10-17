import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersFeedbackService {
  private url = 'http://localhost:3001/customer/products/feedback'

  constructor(private http: HttpClient) { }

  createFeedback(feedback: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, feedback);
  }
}
