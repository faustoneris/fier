import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomersProductService } from '../../services/customers-product.service';
import { AuctionService } from '../../services/auctions/auctions.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../fier-spinner/loader.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  product: any

  user: any;

  error: boolean = false;
  bidMade: boolean = false;

  showDetails: boolean = false
  showRefundPolicy: boolean = false
  showShippingInfo: boolean = false

  bidInfos = {
    bidAmount: 0,
    qtdProduct: ''
  }

  constructor(
    private route: ActivatedRoute,
    private customersProductService: CustomersProductService,
    private readonly auctionService: AuctionService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
  ) {}

  get hasBid(): boolean {
    return !this.error;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')

    if (productId) {
      this.loaderService.setLoading(true);
      this.customersProductService.getCustomerProduct(productId)
        .subscribe((data) => {
          if (data) {
            this.product = data
          } else {
            this.product = {};
          }
          this.loaderService.setLoading(false);
        }, err => {
          this.loaderService.setLoading(false);
          alert(`Ocorreu um erro ao carregar produto: ${JSON.stringify(err)}`)
        })
    }

    this.userService.getUserByDocument(this.authService.userSession.document)
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      }, err => {
        alert(`Ocorreu um erro ao realizar lance do produto: ${JSON.stringify(err)}`,)
      })
  }

  toogleDetails() {
    this.showDetails = !this.showDetails;
  }

  toogleRefundPolicy() {
    this.showRefundPolicy = !this.showRefundPolicy;
  }

  toogleShippingInfo() {
    this.showShippingInfo = !this.showShippingInfo;
  }

  onBid() {
    this.bidMade = true;
    const payload = {
      auctionMinimumPrice: this.product.minAuctionPrice,
      auctionPrice: this.bidInfos.bidAmount,
      productId: this.product.id,
      auctionOwner: {
        name: this.user.name || "",
        email: this.user.email || "",
        phoneNumber: this.user.phoneNumber || "",
        document: this.user.document || ""
      },
      quantityProduct: this.bidInfos.qtdProduct
    }
    this.auctionService.createAuction(payload)
      .subscribe(e => {
        if (e) {
          alert("Lance registrado com sucesso!")
        } else {
          this.error = true;
        }
      }, err => {
        this.error = true;
        alert(`Ocorreu um erro ao registrar lance: ${JSON.stringify(err)}`);
      })
  }
}
