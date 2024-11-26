import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CustomersProductService } from './../../services/customers-product.service'
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component'
import { CardProductComponent } from '../card-product/card-product.component'
import { SpinnerComponent } from '../fier-spinner/spinner.component'

import { forkJoin } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { LoaderService } from '../fier-spinner/loader.service'

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardProductComponent, SpinnerComponent, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: any[] = [];
  selectedCategories: Set<string> = new Set();

  allProducts: any[] = []
  searchQuery: string = ''

  constructor(
      private customersProductService: CustomersProductService,
      private readonly loaderService: LoaderService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  clearSearchProducts(): void {
    this.loaderService.setLoading(true);
    this.customersProductService.getAllCustomersProducts()
      .subscribe(data => {
        if (data && data.length > 0) {
          this.products = data
        } else {
          this.products = []
        }
        this.loaderService.setLoading(false);
      }, err => {
        this.loaderService.setLoading(false);
        alert(`Ocorreu um erro ao carregar produto: ${JSON.stringify(err)}`)
      })
  }

  loadProducts(): void {
    this.loaderService.setLoading(true);
    const categories = Array.from(this.selectedCategories);

    if (categories.length > 0) {
      const productRequests = categories.map(category => {
        return this.customersProductService.getCustomerProductByCategory(category).pipe(
          catchError(err => {
            this.loaderService.setLoading(false);
            console.error(`Err ${category}:`, err)
            return of([])
          })
        )
      })

      forkJoin(productRequests).subscribe(results => {
        const allProducts = results.flat()

        if (allProducts.length > 0) {
          this.allProducts = allProducts
        } else {
          this.allProducts = []
        }
        this.loaderService.setLoading(false);
        this.filterProducts()
      }, err => {
        this.loaderService.setLoading(false);
      })
    } else {
      this.loaderService.setLoading(true);
      this.customersProductService.getAllCustomersProducts().subscribe(data => {
        if (data && data.length > 0) {
          this.allProducts = data
        } else {
          this.allProducts = []
        }
        this.loaderService.setLoading(false);
        this.filterProducts()
      }, err => {
        this.loaderService.setLoading(false);
      });
    }
    this.loaderService.setLoading(false);
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
