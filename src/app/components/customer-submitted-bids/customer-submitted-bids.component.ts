import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrCustomerSubmittedBidsComponent } from '../tr-customer-submitted-bids/tr-customer-submitted-bids.component';

@Component({
  selector: 'app-customer-submitted-bids',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, TrCustomerSubmittedBidsComponent],
  templateUrl: './customer-submitted-bids.component.html',
  styleUrl: './customer-submitted-bids.component.css'
})
export class CustomerSubmittedBidsComponent implements OnInit {
  bids: any[] = [];

  ngOnInit() {
    // Dados fictícios para popular a tabela
    this.bids = [
      {
        product: 'iPhone 15 Pro Max',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      }
    ];
  }
}
