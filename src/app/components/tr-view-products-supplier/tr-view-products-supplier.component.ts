import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersProductService } from '../../services/suppliers-product.service';

@Component({
  selector: 'app-tr-view-products-supplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tr-view-products-supplier.component.html',
  styleUrl: './tr-view-products-supplier.component.css'
})
export class TrViewProductsSupplierComponent {
  constructor(private suppliersProductService: SuppliersProductService) {}

  @Input() product: any;
  @Input() classRow!: string;

  @Output() productDeleted = new EventEmitter<number>();

  onDelete(productId: any): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.suppliersProductService.deteleProduct(productId).subscribe({
        next: () => {
          this.productDeleted.emit(productId)
          alert('Produto excluído com sucesso');
        },
        error: (err) => {
          console.error('Erro ao excluir produto', err);
          alert('Erro ao excluir produto');
        },
      });
    }
  }

  onEdit(productId: any): void {
    console.log('Editar produto - ID: ', productId)
    /* this.suppliersProductService.editProduct(productId).subscribe({
      next: () => {
        alert('Produto editado com sucesso')
        console.log('Produto editado com sucesso')
      }
    }) */
  }

  //@Input() name!: string;
  //@Input() category!: string;
  //@Input() priceMax!: number;
  //@Input() priceMin!: number;
  //@Input() stock!: number;
}
