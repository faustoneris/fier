import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardProductComponent, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})

export class ListProductsComponent {
  products = [
    {
      image: 'assets/images/produto1.png',
      description: 'Uma caixinha de som',
      name: 'Round Mini Portable Bluetooth Speaker',
      price: 85.00,
      totalRating: 100,
      avgRating: 4.2
    },
    {
      image: 'assets/images/produto2.png',
      description: 'Uma celular muito top',
      name: 'OVE Light Space 5G, 128GB',
      price: 900.00,
      totalRating: 424,
      avgRating: 4.7
    },
    {
      image: 'assets/images/produto3.png',
      description: 'Uma caixinha de som portátil',
      name: 'SDK Portable Bluetooth Speaker',
      price: 200.00,
      totalRating: 424,
      avgRating: 4.7
    },
    {
      image: 'assets/images/produto4.png',
      description: 'Relógio preto tecnológico',
      name: 'FitWatch Fitness Smart Watch',
      price: 900.00,
      totalRating: 424,
      avgRating: 4.7
    },
    {
      image: 'assets/images/produto1.png',
      description: 'Uma caixinha de som',
      name: 'Round Mini Portable Bluetooth Speaker',
      price: 85.00,
      totalRating: 100,
      avgRating: 4.2
    },
    {
      image: 'assets/images/produto2.png',
      description: 'Uma celular muito top',
      name: 'OVE Light Space 5G, 128GB',
      price: 900.00,
      totalRating: 424,
      avgRating: 4.7
    },
    {
      image: 'assets/images/produto3.png',
      description: 'Uma caixinha de som portátil',
      name: 'SDK Portable Bluetooth Speaker',
      price: 200.00,
      totalRating: 424,
      avgRating: 4.7
    },
    {
      image: 'assets/images/produto4.png',
      description: 'Relógio preto tecnológico',
      name: 'FitWatch Fitness Smart Watch',
      price: 900.00,
      totalRating: 424,
      avgRating: 4.7
    }
  ];
}
