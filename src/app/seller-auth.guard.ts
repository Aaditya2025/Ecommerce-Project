import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SellerService } from './services/seller.service';


export const sellerAuthGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService);

  // if(sellerService.isSellerLoggedIn){
  //   return true;
  // } else { 
  //   return false; 
  // }

  if(localStorage.getItem('seller')){
    return true;
  }

  return sellerService.isSellerLoggedIn;
  // return false;
};
