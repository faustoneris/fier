import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../services/user.service';

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
    private router: Router,
    private jwtHelper: JwtHelperService,
    private userService: UserService
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

  ngOnInit() {
    const token = localStorage.getItem('token')

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      const document = decodedToken.document

      this.userService.getUserByDocument(document).subscribe(user => {
        this.userForm.setValue({
          userCPF: user.document,
          userName: user.name,
          userPhone: user.phoneNumber,
          userCellphone: user.phoneNumber,
          userEmail: user.email,
          userPwd: '',
          userConfirmPwd: ''
        })
      })

    }
  }

  onSubmit() {
    //put em users p atualizar os dados
  }
}
