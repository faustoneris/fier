import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionService } from '../../services/auctions/auctions.service';
import { SpinnerComponent } from '../fier-spinner/spinner.component';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../fier-spinner/loader.service';

@Component({
  selector: 'app-tr-supplier-received-bids',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: 'tr-supplier-received-bids.component.html',
  styleUrl: './tr-supplier-received-bids.component.css'
})
export class TrSupplierReceivedBidsComponent {

  bid: any = {};

  @Input('bid')
  set _bid(bid: any) {
    if (bid) {
      const status = this.formatStatus(bid.status);
      bid.status = status;
      this.bid = bid;
    }
  }

  @Input() classRow!: string;

  constructor(private readonly auctionService: AuctionService, private readonly authService: AuthService, private readonly loader: LoaderService) {}

  get DateUtc() {
    return new Date().toUTCString();
  }

  acceptPropose() {
    if (this.bid.status == 'Aprovado' || this.bid.status == 'Reprovado') {
      return;
    }
    this.loader.setLoading(true);
    this.auctionService.acceptAuctionPropose(this.bid.productId)
      .subscribe(x => {
        if (x) {
          alert('Proposta aceita com sucesso!')
        }
        window.open("/received-bids", "_self")
        this.loader.setLoading(false);
      }, err => {
        this.loader.setLoading(false);
        alert(`Ocorreu um erro ao aceitar a proposta: ${JSON.stringify(err)}`)
      })
  }

  refusePropose() {
    if (this.bid.status == 'Aprovado' || this.bid.status == 'Reprovado') {
      return;
    }
    this.loader.setLoading(true);
    this.auctionService.refuseAuctionPropose(this.bid.productId)
      .subscribe(x => {
        if (x) {
          alert('Proposta recusada com sucesso!')
        }
        window.open("/received-bids", "_self")
        this.loader.setLoading(false);
      }, err => {
        this.loader.setLoading(false);
        alert(`Ocorreu um erro ao recusar a proposta: ${JSON.stringify(err)}`)
      })
  }

  private formatStatus(status: string) {
    switch (status) {
      case "ACCEPT": return "Aprovado";
      case "REFUSED": return "Reprovado";
      case "WAITING": return "Aguardando resposta";
      default:
        return;
    }
  }
}
