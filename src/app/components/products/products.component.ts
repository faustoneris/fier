import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomersProductService } from '../../services/customers-product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  product: any

  showDetails = false
  showRefundPolicy = false
  showShippingInfo = false

  constructor(
    private route: ActivatedRoute,
    private customersProductService: CustomersProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')

    if (productId) {
      this.customersProductService.getCustomerProduct(productId).subscribe((data) => {
        console.log(data)
        this.product = data
      })
    }
  }

  toogleDetails() {
    this.showDetails = !this.showDetails
  }

  toogleRefundPolicy() {
    this.showRefundPolicy = !this.showRefundPolicy
  }
  bidMade = false;

  bidInfos = {
    bidAmount: '',
    qtdProduct: ''
  }

  onBid(){
    console.log("Bid button clicked");
    this.bidMade = true;
  }
}
