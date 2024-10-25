import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrSupplierReceivedBidsComponent } from '../tr-supplier-received-bids/tr-supplier-received-bids.component';

@Component({
  selector: 'app-supplier-received-bids',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, TrSupplierReceivedBidsComponent],
  templateUrl: './supplier-received-bids.component.html',
  styleUrl: './supplier-received-bids.component.css'
})
export class SupplierReceivedBidsComponent implements OnInit{
  bids: any[] = [];

  ngOnInit() {
    // Dados fictícios para popular a tabela
    this.bids = [
      {
        product: 'iPhone 15 Pro Max',
        customer: 'João Silva',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Messi',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Neymar',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Cristiano Ronaldo',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      }
    ];
  }
}
