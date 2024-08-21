import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: User = {
    name: '',
    lastname: '',
    phoneNumber: 999999999,
    email: ''
  }

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe()
  }
}
