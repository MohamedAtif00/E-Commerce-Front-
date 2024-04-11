import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductModel } from "../Model/product.model";
import { Observable } from "rxjs";
import { ProductService } from "../service/product.service";


@Injectable({
    providedIn:'root'
})
export class SellerResolver implements Resolve<ProductModel[]>{

    constructor(private productServ:ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductModel[] | Observable<ProductModel[]> | Promise<ProductModel[]> {
        return this.productServ.GetProductsForSeller();
    }



}