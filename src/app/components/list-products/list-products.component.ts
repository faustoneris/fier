import { CustomersProductService } from './../../services/customers-product.service'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component'
import { CardProductComponent } from '../card-product/card-product.component'
import { forkJoin } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardProductComponent, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: any[] = [];
  selectedCategories: Set<string> = new Set();

  allProducts: any[] = []
  searchQuery: string = ''

  constructor(private customersProductService: CustomersProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  clearSearchProducts(): void {
    this.customersProductService.getAllCustomersProducts().subscribe(data => {
      this.products = data
    })
  }

  loadProducts(): void {
    const categories = Array.from(this.selectedCategories);

    if (categories.length > 0) {
      const productRequests = categories.map(category => {
        return this.customersProductService.getCustomerProductByCategory(category).pipe(
          catchError(err => {
            console.error(`Err ${category}:`, err)
            return of([])
          })
        )
      })

      forkJoin(productRequests).subscribe(results => {
        this.allProducts = results.flat()
        this.filterProducts()
      })
    } else {
      this.customersProductService.getAllCustomersProducts().subscribe(data => {
        this.allProducts = data
        this.filterProducts()
      });
    }
  }

  onCheckboxChange(event: any, category: string): void {
    if (event.target.checked) {
      this.selectedCategories.add(category)
    } else {
      this.selectedCategories.delete(category)
    }

    this.loadProducts()
  }

  onSearchChange(searchQuery: string): void {
    this.searchQuery = searchQuery
    this.filterProducts()
  }

  filterProducts(): void {
    if (this.searchQuery) {
      this.products = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    } else {
      this.products = this.allProducts
    }
  }
}
