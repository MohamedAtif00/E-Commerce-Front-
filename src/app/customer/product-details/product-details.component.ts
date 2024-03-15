import { Component, OnInit } from '@angular/core';
//import { BookService } from '../Shared/book/book.service';
import { book } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  book!:book;
  //constructor(private bookService:BookService){}

  ngOnInit(): void {
    //this.book = this.bookService.book;
  }

}
