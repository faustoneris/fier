import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isClient = true

  loginForm!: FormGroup

  constructor(private loginService: LoginService, private fb: FormBuilder) {}

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

  setClient(value: boolean) {
    this.isClient = value
    this.updateFormControls()
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

  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }

    console.log('Enviou formulario!')

    //this.loginService.login(payload)
  }
}
