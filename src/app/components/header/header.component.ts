import { Component, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  @Output() searchChanged = new EventEmitter<string>()

  onSearchChange(event: any): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchChanged.emit(searchQuery);
  }

  redirectBasedOnLoginType(): void {
    const loginType = this.authService.getRole()

    if (loginType == 'SUPPLIER') {
      this.router.navigate(['/received-bids'])
    } else if (loginType == 'CUSTOMER') {
      this.router.navigate(['/submitted-bids'])
    } else if (loginType == null) {
      alert('Erro no sistema (loginType == null)')
    }
  }

}
