import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
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
}
