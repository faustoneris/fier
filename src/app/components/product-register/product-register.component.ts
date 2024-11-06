import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuppliersProductService } from '../../services/suppliers-product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {
  productForm: FormGroup
  submitted = false

  constructor(
    private fb: FormBuilder,
    private suppliersProductService: SuppliersProductService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPriceMin: ['', Validators.required],
      productPriceMax: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productSpecification: ['', Validators.required],
      productImages: [null]
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value
      
      const token = localStorage.getItem('token')

      if(token) {
        const decodedToken = this.jwtHelper.decodeToken(token)
        const document = decodedToken.document

        const payload = {
          name: formData.productName,
          document: document,
          price: formData.productPriceMin, 
          image: "~/images/",
          category: formData.productCategory,
          feedbacks: [],
          specifications: {
              model: null,
              color: null,
              description: formData.productDescription
          }
        }
  
        this.suppliersProductService.createProduct(payload).subscribe({
          next: (response) => {
            console.log('Produto cadastrado com sucesso:', response)
            this.onClear()
            this.router.navigate(['/view-products-supplier'])
          },
          error: (error) => {
            console.error('Erro ao cadastrar o produto:', error)
            alert('Erro ao cadastrar um produto!')
          }
        })
      }
      
    } else {
      console.log('Formulário inválido!');
    }
  }

  onClear() {
    this.productForm.reset();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productForm.patchValue({ productImages: file });
    }
  }

  get productName() {
    return this.productForm.get('productName')!
  }

  get productPriceMin() {
    return this.productForm.get('productPriceMin')!
  }

  get productPriceMax() {
    return this.productForm.get('productPriceMax')!
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