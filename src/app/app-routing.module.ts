import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
