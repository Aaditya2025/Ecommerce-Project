import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SellerAuthComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
