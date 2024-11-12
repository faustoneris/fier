import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuctionService {
    private url = 'http://localhost:3001/auction' // mudar pro BFF
    constructor(private http: HttpClient) { }

    createAuction(auction: any): Observable<any> {
        return this.http.post<any>(this.url, auction);
    }
}
