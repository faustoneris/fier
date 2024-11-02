import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule, SignUpComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isClient = true;

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}
  
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('registerBtn', { static: true }) registerBtn!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  ngAfterViewInit() {
    this.registerBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add("active");
    });

    this.loginBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove("active");
    });
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.loginForm = this.fb.group({
      password: [null, Validators.required],
      cpf: ['', this.isClient ? Validators.required : []],
      cnpj: ['', this.isClient ? Validators.required : []],
    })

    this.updateFormControls()
  }

  setClient(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.isClient = (selectedValue === 'C' || selectedValue === '') ? true : false;
    this.updateFormControls();
  }

  updateFormControls() {
    if (this.isClient) {
      this.loginForm.get('cpf')?.setValidators([Validators.required])
      this.loginForm.get('cnpj')?.clearValidators()
      this.loginForm.get('cnpj')?.setValue('')
    } else {
      this.loginForm.get('cnpj')?.setValidators([Validators.required])
      this.loginForm.get('cpf')?.clearValidators()
      this.loginForm.get('cpf')?.setValue('')
    }

    this.loginForm.get('cpf')?.updateValueAndValidity();
    this.loginForm.get('cnpj')?.updateValueAndValidity();
  }

  get cpf() {
    return this.loginForm.get('cpf')!
  }

  get cnpj() {
    return this.loginForm.get('cnpj')!
  }

  get password() {
    return this.loginForm.get('password')!
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    let payload: any = {
      password: this.loginForm.get('password')?.value,
    }

    if (this.isClient) {
      payload.document = this.loginForm.get('cpf')?.value;
      payload.loginType = 'CUSTOMER'; // mudar para pegar d forma dinamica
    }

    if (!this.isClient) {
      payload.document = this.loginForm.get('cnpj')?.value;
      payload.loginType = 'SUPPLIER'; // mudar para pegar d forma dinamica
    }

    this.authService.signIn(payload)
  }

  onCreate(){
    console.log('cria');
  }
}
