import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {

}