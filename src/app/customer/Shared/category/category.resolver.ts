import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CategoryModel } from "../../Model/Category.model";
import { Observable, map } from "rxjs";
import { CategoryService } from "./category.service";

export class CategoryResolver implements Resolve<CategoryModel[]>{


    constructor(private categoryserv:CategoryService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CategoryModel[] | Observable<CategoryModel[]> | Promise<CategoryModel[]> {
        
        return this.categoryserv.getAllCategories();
    }

}