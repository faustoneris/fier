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
}
