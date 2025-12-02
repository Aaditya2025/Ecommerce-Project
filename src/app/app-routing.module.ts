import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './Components/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './Components/seller-update-product/seller-update-product.component';
import { SearchComponent } from './Components/search/search.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth', 
    component: SellerAuthComponent
  },
  {
    path: 'seller-home', 
    component: SellerHomeComponent,
    canActivate: [sellerAuthGuard]
  },
  {
    path: 'seller-add-product', 
    component: SellerAddProductComponent,
    canActivate: [sellerAuthGuard]
  },
  {
    path: 'seller-update-product/:id',
    component: SellerUpdateProductComponent, 
    canActivate: [sellerAuthGuard]
  },
  {
    path: 'search/:query', 
    component: SearchComponent
  }, 
  {
    path: 'details/:productId', 
    component: ProductDetailsComponent
  }, 
  {
    path: 'user-auth', 
    component: UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
