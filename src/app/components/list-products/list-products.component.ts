import { CustomersProductService } from './../../services/customers-product.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  products: any[] = [];

  constructor(private customersProductService: CustomersProductService) {}

  ngOnInit(): void {
    this.customersProductService.getAllCustomersProducts().subscribe(data => {
      this.products = data;
    });
  }
}
