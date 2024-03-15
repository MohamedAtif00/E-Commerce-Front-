import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SearchComponent } from './header/search/search.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ListCarouselComponent } from './home/list-carousel/list-carousel.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    ListCarouselComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ]
})
export class CustomerModule { }
