import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      userCPF: ['', Validators.required],
      userName: ['', Validators.required],
      userPhone: ['', Validators.required],
      userCellphone: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPwd: ['', Validators.required],
      userConfirmPwd: ['', Validators.required]
    })
  }

  onSubmit() {

  }
}
