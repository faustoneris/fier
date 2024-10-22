import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-view-products-supplier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './view-products-supplier.component.html',
  styleUrl: './view-products-supplier.component.css'
})
export class ViewProductsSupplierComponent {

}
