import { Component } from '@angular/core';
import { cart, Login, product, SignUp } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  showLogin:boolean=true;
  authError:string='';

  constructor(private user: UserService, private product: ProductService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(value:SignUp){
    this.user.userSignUp(value);
    
  }

  logIn(value:Login){
    this.user.userLogIn(value);
    this.user.invalidUser.subscribe((isInvalid) => {
      if (isInvalid) {
        this.authError = "Please enter valid email and password";
      }else{
        this.localCartToRemoteCart();
      }
    });
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }

  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart'); 
    let user= localStorage.getItem('user'); 
    let userId = user && JSON.parse(user).id;
    if(data){
      let cartDataList: product[] = JSON.parse(data); 
      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product, 
          productId: product.id, 
          userId,
        }; 

        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.log("Item stored in DB"); 
            }
          })
          if(cartDataList.length === index+1){
            localStorage.removeItem('localCart'); 
          } 
        }, 500);
      });
    }
    setTimeout(() => {
      this.product.getCartList(userId)
    }, 2000)
  }
}
