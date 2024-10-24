import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-supplier-received-bids',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
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
        customer: 'Mobile & Wearable Tech',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Mobile & Wearable Tech',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Mobile & Wearable Tech',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      },
      {
        product: 'iPhone 15 Pro Max',
        customer: 'Mobile & Wearable Tech',
        price: 10000.00,
        date: '24/04/2002',
        status: 'Aguardando Resposta'
      }
    ];
  }
}
