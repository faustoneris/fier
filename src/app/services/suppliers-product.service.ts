import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersProductService {
  private url = 'http://localhost:3001/supplier/product'

  constructor(private http: HttpClient) { }

  getSupplierProduct(productId: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${productId}`);
  }

  createProduct(payload: any): Observable<any> {
    return this.http.post<any>(this.url, payload);
  }

  deteleProduct(productId: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${productId}`);
  }

 /*  editProduct(productId: any): Observable<any> {
    return this.http.put<any>(`${this.url}`)
  } */
}
