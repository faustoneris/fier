import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuppliersProductService } from '../../services/suppliers-product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {
  productForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private suppliersProductService: SuppliersProductService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: [''],
      productSpecification: [''],
      productDocument: [null]
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value

      //payload teste (fix)
      const payload = {
        name: formData.productName, 
        price: formData.productPrice, 
        image: "~/images/",
        category: formData.productCategory,
        feedbacks: [],
        specifications: {
            model: formData.productName,
            color: null,
            description: formData.productDescription
        }
      }

      this.suppliersProductService.createProduct(payload).subscribe({
        next: (response) => {
          console.log('Produto cadastrado com sucesso:', response)
          this.onClear()
        },
        error: (error) => {
          console.error('Erro ao cadastrar o produto:', error)
        }
      })
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
      this.productForm.patchValue({ productDocument: file });
    }
  }
}