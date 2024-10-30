import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrViewProductsSupplierComponent } from '../tr-view-products-supplier/tr-view-products-supplier.component';

@Component({
  selector: 'app-view-products-supplier',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TrViewProductsSupplierComponent, CommonModule],
  templateUrl: './view-products-supplier.component.html',
  styleUrl: './view-products-supplier.component.css'
})
export class ViewProductsSupplierComponent implements OnInit{
  products: any[] = [];

  ngOnInit() {
    this.products = [
      {
        id: 312,
        name: 'iPhone 15 Pro Max',
        category: 'Mobile & Wearable Tech',
        priceMax: 10000.00,
        priceMin: 9500.00,
        stock: 23
      },
      {
        id: 342,
        name: 'Samsung Galaxy S23 Ultra',
        category: 'Mobile & Wearable Tech',
        priceMax: 8500.00,
        priceMin: 8000.00,
        stock: 15
      },
      {
        id: 675,
        name: 'DJI Mavic Air 2',
        category: 'Drones & Cameras',
        priceMax: 5000.00,
        priceMin: 4700.00,
        stock: 12
      },
      {
        id: 896,
        name: 'Sony WH-1000XM4',
        category: 'Headphones & Speakers',
        priceMax: 1500.00,
        priceMin: 1300.00,
        stock: 8
      }
    ];
  }
}