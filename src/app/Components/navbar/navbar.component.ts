import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: product[]= [];
  userName: string ='';
  
  constructor(private route: Router, private product: ProductService) {}

  ngOnInit() {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            this.menuType = 'seller';
          }
        else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user'); 
          let userData = userStore && JSON.parse(userStore); 
          this.userName = userData.name; 
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  searchProd(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      const value = element.value.trim();

      if (!value) {
      this.searchResult.length = 0;
      return;
    }
      this.product.searchProducts(element.value).subscribe((res) => {
        this.searchResult = res.filter(
          (p) =>
            p.name.toLowerCase().includes(element.value.toLowerCase()) ||
            p.category.toLowerCase().includes(element.value.toLowerCase())
        );
        if(this.searchResult.length > 5){
          this.searchResult.length = 5;
        }
      });
    }
  }

  hideSearch(){
    this.searchResult.length = 0;
  }
  
  redirectToDetails(id:number){
    this.route.navigate([`details/${id}`])
  }

  submitSearch(val:string){
    console.log(val);
    this.route.navigate([`search/${val}`]);
  }
}
