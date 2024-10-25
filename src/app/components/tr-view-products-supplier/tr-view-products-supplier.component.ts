import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tr-view-products-supplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tr-view-products-supplier.component.html',
  styleUrl: './tr-view-products-supplier.component.css'
})
export class TrViewProductsSupplierComponent {
  @Input() product: any;
  @Input() classRow!: string;

  //@Input() name!: string;
  //@Input() category!: string;
  //@Input() priceMax!: number;
  //@Input() priceMin!: number;
  //@Input() stock!: number;
}
