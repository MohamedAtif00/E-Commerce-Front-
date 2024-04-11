import { Component, OnInit } from '@angular/core';
import { AllowAccessModel } from 'src/app/authentication/Model/Response/allow-access.model';
import { ProductModel } from 'src/app/seller/Share/Model/product.model';
import { ProductService } from 'src/app/seller/Share/service/product.service';
import { SellerService } from 'src/app/seller/Share/service/seller.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  products!:ProductModel[];
  user!:AllowAccessModel;

  constructor(private productsServ:ProductService,public sellerServ:SellerService){}

  ngOnInit(): void {
    if(this.productsServ.products)
      this.products = this.productsServ.products

    this.user = this.sellerServ.seller

  }

}
