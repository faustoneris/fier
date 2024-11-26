import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrCustomerSubmittedBidsComponent } from '../tr-customer-submitted-bids/tr-customer-submitted-bids.component';
import { SpinnerComponent } from '../fier-spinner/spinner.component';
import { LoaderService } from '../fier-spinner/loader.service';
import { AuctionService } from '../../services/auctions/auctions.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-submitted-bids',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, TrCustomerSubmittedBidsComponent, SpinnerComponent],
  templateUrl: './customer-submitted-bids.component.html',
  styleUrl: './customer-submitted-bids.component.css'
})
export class CustomerSubmittedBidsComponent implements OnInit {

  constructor(
    private readonly loader: LoaderService,
    private readonly auctionService: AuctionService,
    private readonly authService: AuthService
  ) {}
  bids: any[] = [];

  ngOnInit() {
    this.fetchCustomerAuctions();
  }

  fetchCustomerAuctions() {
    this.loader.setLoading(true);
    this.auctionService.fetchAuctionByCustomerDocument(this.authService.getDocument())
      .subscribe(auctions => {
        if (auctions) {
          this.bids = auctions;
        } else {
          this.bids = [];
        }
        this.loader.setLoading(false);
      }, err => {
        if (err) {
          this.loader.setLoading(false);
          alert(`Houve um erro ao trazer seus lances: ${JSON.stringify(err)}`);
        }
      })
  }
}
// {
//   "id": "67462cc4bffe290e77454d62",
//   "auctionMinimumPrice": null,
//   "auctionPrice": 2000,
//   "productId": null,
//   "supplierDocument": null,
//   "auctionOwner": {
//       "name": "manuela",
//       "email": "manu-antoni@hotmail.com",
//       "document": "52628551802",
//       "phoneNumber": "11974480406"
//   },
//   "quantityProduct": 1,
//   "status": "WAITING"
// }
