import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productData: undefined | product
  quantity:number = 1;

  constructor(private activateRoute:ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((res) => {
      console.log(res);
      this.productData = res;
    })
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
}
