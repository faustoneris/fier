import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tr-customer-submitted-bids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tr-customer-submitted-bids.component.html',
  styleUrl: './tr-customer-submitted-bids.component.css'
})
export class TrCustomerSubmittedBidsComponent implements OnInit{
  ngOnInit(): void {
    if (!this.bid.date) {
      this.bid.date = new Date().toUTCString();
    }
    this.formatStatus();
  }
  @Input() bid: any;
  @Input() classRow!: string;


  private formatStatus(): string {
    switch (this.bid.status) {
      case "WAITING": return this.bid.status = "Aguardando resposta"
      case "REFUSED": return this.bid.status = "Recusado"
      case "ACCEPT": return this.bid.status = "Aprovado"
      default:
        return "";
    }
  }
}
