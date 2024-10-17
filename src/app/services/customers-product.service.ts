import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersProductService {
  private url = 'http://localhost:3001/customer/products'

  constructor(private http: HttpClient) { }

  getAllCustomersProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }

  getCustomerProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  getCustomerProductByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.url}/categories/${category}`);
  }
}
