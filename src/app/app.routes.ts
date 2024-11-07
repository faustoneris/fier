import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { authorizationGuard } from './_guard/authorization.guard';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { publicGuard } from './_guard/public.guard';
import { ViewProductsSupplierComponent } from './components/view-products-supplier/view-products-supplier.component';
import { SupplierReceivedBidsComponent } from './components/supplier-received-bids/supplier-received-bids.component';
import { CustomerSubmittedBidsComponent } from './components/customer-submitted-bids/customer-submitted-bids.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [  authorizationGuard  ] },
  { path: 'register', component: SignUpComponent, canActivate: [publicGuard] },
  { path: 'login', component: SignInComponent, canActivate: [publicGuard] },
  { path: 'product/:id', component: ProductsComponent, canActivate: [ authorizationGuard ] },
  { path: 'list-products', component: ListProductsComponent, canActivate: [ authorizationGuard ] },
  { path: 'product-create', component: ProductRegisterComponent, canActivate: [ authorizationGuard ] }, //Ja esta para só supplier na auth
  { path: 'view-products-supplier', component: ViewProductsSupplierComponent, canActivate: [ authorizationGuard ] }, //Ajustar para somente supplier ver
  { path: 'received-bids', component: SupplierReceivedBidsComponent, canActivate: [ authorizationGuard ] }, //Ajustar para somente supplier ver
  { path: 'submitted-bids', component: CustomerSubmittedBidsComponent, canActivate: [ authorizationGuard ] }, //Ajustar para somente usuário ver
  { path: 'update-user', component: UpdateUserComponent, canActivate: [ authorizationGuard ] }, //Ajustar para somente usuário ver
  { path: 'update-product', component: UpdateProductComponent, canActivate: [ authorizationGuard ] }, //Ajustar para somente usuário ver
  { path: '**', redirectTo: '', pathMatch: 'full' }, //TEM QUE SER A ULTIMA ROTA
];
