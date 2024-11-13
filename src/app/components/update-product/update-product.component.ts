import { SuppliersProductService } from './../../services/suppliers-product.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersProductService } from '../../services/customers-product.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productForm: FormGroup
  submitted = false

  productId: any
  productData: any

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customersProductService: CustomersProductService,
    private suppliersProductService: SuppliersProductService,
    private authService: AuthService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productInitialBid: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productSpecification: ['', Validators.required],
      productImages: [null]
    })
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProductData();
  }

  loadProductData(): void {
    this.customersProductService.getCustomerProduct(this.productId).subscribe({
      next: (data) => {
        this.productData = data
        console.log('Dados carregados', this.productData)

        this.productForm.patchValue({
          productName: this.productData.name,
          productPrice: this.productData.price,
          productInitialBid: this.productData.minAuctionPrice,
          productCategory: this.productData.category,
          productDescription: this.productData.specifications.description,
          productSpecification: this.productData.specifications.description
        })
      },
      error: (err) => {
        console.error('Erro ao carregar os dados: ', err)
      }
    })
  }

  onUpdate() {
    const formValues = this.productForm.value

    const payload = {
      name: formValues.productName,
      document: this.authService.getDocument(),
      price: formValues.productPrice,
      /* image: '', */
      category: formValues.productCategory,
      minAuctionPrice: formValues.productInitialBid,
      feedbacks: [],
      specifications: {
        color: '',
        description: formValues.productDescription,
        model: '',
        size: ''
      }
    }

    console.log(payload)

    this.suppliersProductService.editProduct(this.productId, payload).subscribe({
      next: (data) => {
        alert('Produto atualizado com sucesso')
        this.router.navigate(['/view-products-supplier'])
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  get productName() {
    return this.productForm.get('productName')!
  }

  get productPrice() {
    return this.productForm.get('productPrice')!
  }

  get productInitialBid() {
    return this.productForm.get('productInitialBid')!
  }

  get productCategory() {
    return this.productForm.get('productCategory')!
  }
  
  get productDescription() {
    return this.productForm.get('productDescription')!
  }

  get productSpecification() {
    return this.productForm.get('productSpecification')!
  }
}
