import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrSupplierReceivedBidsComponent } from '../tr-supplier-received-bids/tr-supplier-received-bids.component';
import { SpinnerComponent } from '../fier-spinner/spinner.component';
import { AuctionService } from '../../services/auctions/auctions.service';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../fier-spinner/loader.service';

@Component({
  selector: 'app-supplier-received-bids',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, SpinnerComponent, TrSupplierReceivedBidsComponent],
  templateUrl: './supplier-received-bids.component.html',
  styleUrl: './supplier-received-bids.component.css'
})
export class SupplierReceivedBidsComponent implements OnInit{
  bids: any[] = [];
  
  constructor(
    private readonly auctionService: AuctionService,
    private readonly authService: AuthService,
    private readonly loader: LoaderService
  ) {}

  ngOnInit() {
    this.loader.setLoading(true);
    this.auctionService.fetchAuctionBySupplierDocument(this.authService.getDocument())
      .subscribe(bids => { 
        if (bids && bids.length > 0) { 
          this.bids = bids;
        } else { 
          this.bids = [];
        }
      this.loader.setLoading(false);
      }, err => { 
        this.loader.setLoading(false);
        alert(`Ocorreu um erro ao carregar os lances: ${JSON.stringify(err)}`);
      })
  }
}
