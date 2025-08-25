import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from 'src/app/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  showLogin: boolean = false;
  authError: string = '';
  constructor(private seller:SellerService, private router: Router){ }

  ngOnInit(){
    this.seller.reloadSeller();
  }
  signUp(data:SignUp):void {
    this.seller.sellerSignUp(data);

  }

  login(data:Login):void{
    this.authError = "";
    this.seller.sellerLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError = "Email or password is not correct";
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false; 
  }
}
