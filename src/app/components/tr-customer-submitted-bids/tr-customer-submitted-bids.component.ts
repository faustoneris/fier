import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tr-customer-submitted-bids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tr-customer-submitted-bids.component.html',
  styleUrl: './tr-customer-submitted-bids.component.css'
})
export class TrCustomerSubmittedBidsComponent {
  @Input() bid: any;
  @Input() classRow!: string;
}
