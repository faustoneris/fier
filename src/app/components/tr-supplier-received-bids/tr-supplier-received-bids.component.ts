import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tr-supplier-received-bids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tr-supplier-received-bids.component.html',
  styleUrl: './tr-supplier-received-bids.component.css'
})
export class TrSupplierReceivedBidsComponent {
  @Input() bid: any;
  @Input() classRow!: string;
}
