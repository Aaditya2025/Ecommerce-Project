import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  toastMessage: string = '';
  icon = faTrash;
  editIcon = faPen;


  constructor(private productSrv: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  removeProduct(id: number) {
    this.productSrv.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        this.toastMessage = '✅ Product is Removed';  // ✅ set toastMessage
        this.loadProducts();

        // hide after 3 sec
        setTimeout(() => {
          this.toastMessage = '';
        }, 3000);
      }
    });
  }

  loadProducts() {
    this.productSrv.productList().subscribe((res: any) => {
      this.productList = res;
    });
  }

  editProduct(id:number){

  }
}
