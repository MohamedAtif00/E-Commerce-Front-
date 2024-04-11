import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/authentication/Service/auth.service";
import { ProductModel } from "../Model/product.model";
import { Observable, switchMap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService{


    products?:ProductModel[];

    constructor(private http:HttpClient,private auth:AuthService){}

    getProductsForSellerLink:string = 'http://localhost:5119/api/Product/GetProductsForSeller/';


    GetProductsForSeller() 
    {
        return this.auth.AllowAccess().pipe(
            switchMap(data => {
              const userId = data.body?.sellerId;
              if (userId) {
                return this.http.get<any>(this.getProductsForSellerLink + userId);
              } else {
                // If userId is not available, return an empty array
                return [];
              }
            })
        );
    }
}