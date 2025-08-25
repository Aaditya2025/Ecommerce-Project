import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;

  constructor(private product: ProductService){}

  submit(data:product){
    this.product.addProduct(data).subscribe((res:any) => {
      console.warn(res);
      if(res){
        this.addProductMessage = "Product is successfully added";
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }

}
