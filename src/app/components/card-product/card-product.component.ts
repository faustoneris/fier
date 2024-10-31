import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() image!: string;
  @Input() description!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() totalRating!: number;
  @Input() avgRating!: number;
  @Input() productId!: string

  constructor(private router: Router) {}

  navigateToProduct() {
    this.router.navigate(['/product', this.productId])
  }
}
