import { Injectable } from "@angular/core";
import { book } from "src/app/product-list/product-list.component";

Injectable({
    providedIn:'root'
})
export class BookService{

    book!:book;
}