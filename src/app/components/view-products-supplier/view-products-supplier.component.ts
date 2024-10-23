import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrViewProductsSupplierComponent } from '../tr-view-products-supplier/tr-view-products-supplier.component';

@Component({
  selector: 'app-view-products-supplier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TrViewProductsSupplierComponent],
  templateUrl: './view-products-supplier.component.html',
  styleUrl: './view-products-supplier.component.css'
})
export class ViewProductsSupplierComponent {

}
