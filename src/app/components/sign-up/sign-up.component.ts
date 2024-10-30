import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isClient = true
  
  registerForm!: FormGroup

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
      this.registerForm.get('cpf')?.setValidators([Validators.required])
      this.registerForm.get('cnpj')?.clearValidators()
      this.registerForm.get('cnpj')?.setValue('')
    } else {
      this.registerForm.get('cnpj')?.setValidators([Validators.required])
      this.registerForm.get('cpf')?.clearValidators()
      this.registerForm.get('cpf')?.setValue('')
    }

    this.registerForm.get('cpf')?.updateValueAndValidity();
    this.registerForm.get('cnpj')?.updateValueAndValidity();
  }

  get name() {
    return this.registerForm.get('name')!
  }

  get email() {
    return this.registerForm.get('email')!
  }

  get cpf() {
    return this.registerForm.get('cpf')!
  }

  get cnpj() {
    return this.registerForm.get('cnpj')!
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber')!
  }

  get password() {
    return this.registerForm.get('password')!
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')!
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return
    }

    let payload: any = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phoneNumber')?.value,
      password: this.registerForm.get('password')?.value,
      loginType: this.isClient ? 'CUSTOMER' : 'SUPPLIER'
    }

    if (this.isClient) {
      payload.document = this.registerForm.get('cpf')?.value;
    }

    if (!this.isClient) {
      payload.document = this.registerForm.get('cnpj')?.value;
    }

    this.userService.createUser(payload).subscribe({
      next: (res) => {
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.error('Erro ao criar o usuário: ', err)

        if (err.status === 502) {
          alert('Usuário já cadastrado!')
        } else {
          alert('Erro. Tente novamente!')
        }

      }
    })
  }
}
