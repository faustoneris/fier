import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})

export class ProductRegisterComponent{
  formProductRegister: FormGroup;

  constructor() {
    this.formProductRegister = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productCategory: new FormControl(''),
      productDescription: new FormControl(''),
      productSpecification: new FormControl(''),
      productDocument: new FormControl(''),
      productImage: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.formProductRegister.value);
  }
}