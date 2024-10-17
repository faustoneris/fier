import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isClient = true;  

  user = {
    name: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    cpf: '',  
    cnpj: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    console.log('ONSUBMIT!')
    let payload
    
    if (this.isClient) {
      payload = {
        name: this.user.name,
        lastname: this.user.lastname,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
        cpf: this.user.cpf,
        password: this.user.password  
      }
    } else {
      payload = {
        name: this.user.name,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
        cnpj: this.user.cnpj,
        password: this.user.password  
      }
    }

    this.userService.createUser(payload).subscribe();
  }
}
