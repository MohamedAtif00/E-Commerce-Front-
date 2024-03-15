import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './customer/header/header.component';
import { HomeComponent } from './customer/home/home.component';
import { ProductListComponent } from './customer/product-list/product-list.component';
import { ProductDetailsComponent } from './customer/product-details/product-details.component';
import { NavbarComponent } from './customer/header/navbar/navbar.component';
import { SearchComponent } from './customer/header/search/search.component';
import { CarouselComponent } from './customer/home/carousel/carousel.component';
import { ListCarouselComponent } from './customer/home/list-carousel/list-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
