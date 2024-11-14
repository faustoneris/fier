import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuctionService {
    private url = 'http://localhost:3001/auction'
    constructor(private http: HttpClient) { }

    createAuction(auction: any): Observable<any> {
        return this.http.post<any>(this.url, auction);
    }

    refuseAuctionPropose(productId: string): Observable<boolean> {
        return this.http.put<boolean>(`${this.url}/supplier/refuse/${productId}`, null);
    }

    acceptAuctionPropose(productId: string): Observable<boolean> {
        return this.http.put<boolean>(`${this.url}/supplier/accept/${productId}`, null);
    }

    fetchAuctionBySupplierDocument(document: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/supplier/${document}`);
    }
}
