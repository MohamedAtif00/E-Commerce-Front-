import { CategoryModel } from "./category.model";

export interface ProductModel{
    id:{value:string},
    name:string,
    category:CategoryModel
}