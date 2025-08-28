import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit{
  productData: undefined | product;
  productMessage: undefined | string;

  constructor( private router : Router, private route: ActivatedRoute, private updateProduct: ProductService){}

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.updateProduct.getProduct(productId).subscribe((res:any) => {
      console.warn(res);
      this.productData = res;
    })
  }

  submit(data:product, id: any){
    if(this.productData){
      data.id = this.productData.id;
    }
    console.warn(data, id);
    this.updateProduct.updateProd(data).subscribe((res) => {
      if(res){
        this.productMessage = "Product has updated!";
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
      this.router.navigate(['seller-home'])
    }, 2000);
  }
}
