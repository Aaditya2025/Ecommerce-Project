import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productData: undefined | product
  quantity:number = 1;
  removeCart:boolean = false;

  constructor(private activateRoute:ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((res) => {
      this.productData = res;
    })

    let cartData = localStorage.getItem('localCart');
    if(productId && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((item: product) => productId == item.id.toString());
      if(items.length){
        this.removeCart = true;
      } else {
        this.removeCart = false;
      }
    }
  }

  goBack(){}

  increaseQty(){
    if(this.quantity < 20){
      this.quantity++;
    }
  }

  decreaseQty(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity = this.quantity
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData);
        this.removeCart = true;
      }else {
        console.log('User is logged in, implement server-side cart functionality');
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id; 
        console.log('User ID:', userId);
        let cartData: cart = {
          ...this.productData,
          userId: userId,
          productId: this.productData.id
        }
        delete cartData.id;
        console.log('Cart Data to be sent to server:', cartData);
        }
      }
    }

  removeFromCart(productId:number){
    this.product.removeItemFromCart(productId);
    this.removeCart = false;  
  }

}
