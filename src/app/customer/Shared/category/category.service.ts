import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel } from "../../Model/Category.model";

@Injectable(
    {
        providedIn:'root'
    }
)
export class CategoryService{
    
    getAllCategoriesLink = "http://localhost:5119/api/RootCategory/GetAllCategories";


    constructor(private http:HttpClient){}
    

    getAllCategories()
    {
        return this.http.get<any>(this.getAllCategoriesLink)
    }
}