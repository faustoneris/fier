import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../fier-spinner/spinner.component';
import { LoaderService } from '../fier-spinner/loader.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule, SpinnerComponent],
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
    private userService: UserService,
    private authService: AuthService,
    private readonly loader: LoaderService
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
    this.loader.setLoading(true);
    const token = localStorage.getItem('token')
    const form = this.userForm.value

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const payload = {
        name: form.userName,
        email: form.userEmail,
        document: form.userCPF,
        phoneNumber: form.userPhone,
        // password: form.userPwd,
        loginType: this.authService.getRole()
      }

      this.userService.updateUser(decodedToken.sub, payload).subscribe(res => {
      this.loader.setLoading(false);
        alert('Informações atualizadas!')
      }, err => {
        this.loader.setLoading(false);
        alert('Erro!')
        console.error('Erro -', err)
      })

    }
  }
}
