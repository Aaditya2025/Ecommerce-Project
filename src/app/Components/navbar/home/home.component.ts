import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularProducts: product[] = [];
  allProducts: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.popularProduct().subscribe((res) => {
      this.popularProducts = res;
    });

    this.productService.allProducts().subscribe((res) => {
      this.allProducts = res;
    })
  }

  viewDetails(item:product){}

  addToCart(item:product){}
}
