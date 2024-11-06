import { CustomersProductService } from './../../services/customers-product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrViewProductsSupplierComponent } from '../tr-view-products-supplier/tr-view-products-supplier.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-view-products-supplier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TrViewProductsSupplierComponent, CommonModule],
  templateUrl: './view-products-supplier.component.html',
  styleUrl: './view-products-supplier.component.css'
})
export class ViewProductsSupplierComponent implements OnInit{
  constructor(private customersProductService: CustomersProductService, private jwtHelper: JwtHelperService) {}

  products: any[] = [];

  ngOnInit() {
    this.customersProductService.getAllCustomersProducts().subscribe(products => {
      const token = localStorage.getItem('token')

      if (token && !this.jwtHelper.isTokenExpired(token)) {
        const decodedToken = this.jwtHelper.decodeToken(token);
        const document = decodedToken.document

        const filteredProducts = products.filter(product => product.document === document)

        this.products = filteredProducts
      }
    })
  }

  onProductDeleted(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}