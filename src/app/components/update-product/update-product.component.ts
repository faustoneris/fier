import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
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

  onUpdate() {
    console.log('onupdate');
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
