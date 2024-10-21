import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  bidMade = false;

  bidInfos = {
    bidAmount: '',
    qtdProduct: ''
  }

  onBid(){
    console.log("Bid button clicked");
  }
}
