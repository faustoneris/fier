import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { authorizationGuard } from './_guard/authorization.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, /* canActivate: [authorizationGuard] */ },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'products', component: ProductsComponent, /* canActivate: [authorizationGuard] */ },
];
