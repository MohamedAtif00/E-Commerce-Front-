import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ManagementComponent } from './body/management/management.component';
import { ProductsListComponent } from './body/management/products-list/products-list.component';
import { ProductDetailsComponent } from './body/management/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { SellerRoutingModule } from './seller-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    ManagementComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
