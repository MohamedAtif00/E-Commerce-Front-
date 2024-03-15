import { Component } from '@angular/core';
//import { BookService } from '../Shared/book/book.service';
import { Router } from '@angular/router';

export interface book{
  title:string,
  publisher:string,
  price:number,
  image:string
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

   books: book[] = [
    { title: 'The Midnight Garden', publisher: 'Glowing Pages Publishing', price: 15.99,image:'https://m.media-amazon.com/images/I/81dDwAzxtrL._AC_UL320_.jpg' },
    { title: 'Echoes of Eternity', publisher: 'Dreamscape Books', price: 12.49 ,image:'https://m.media-amazon.com/images/I/81aUwu7LHrL._AC_UL320_.jpg'},
    { title: 'Whispers in the Wind', publisher: 'Enchanted Press', price: 9.99 ,image:'https://m.media-amazon.com/images/I/91SurMPnIxS._AC_UL320_.jpg'},
    { title: 'Mysteries of the Moon', publisher: 'Lunar Publishing House', price: 14.99 ,image:'https://m.media-amazon.com/images/I/81FTgk1YcwL._AC_UL320_.jpg'},
    { title: 'Sands of Time', publisher: 'Desert Oasis Books', price: 11.99 ,image:'https://m.media-amazon.com/images/I/61uT-BwV4pL._AC_UL320_.jpgs'},
    { title: 'Shadows of Destiny', publisher: 'Eternal Ink', price: 10.99 ,image:'https://m.media-amazon.com/images/I/914FNnRk19L._AC_UL320_.jpg'},
    { title: 'Stars of Serenity', publisher: 'Celestial Press', price: 13.99 ,image:'https://m.media-amazon.com/images/I/71kdiN5Y1YL._AC_UL320_.jpg'},
    { title: 'Secrets of the Sea', publisher: 'Oceanic Books', price: 16.49 ,image:'https://m.media-amazon.com/images/I/61cZ4d-jPmL._AC_UL320_.jpgs'},
    { title: 'Forgotten Dreams', publisher: 'Memory Lane Publishing', price: 8.99 ,image:'https://m.media-amazon.com/images/I/71JtF90V+DL._AC_UL320_.jpg'},
    { title: 'Realm of Reflections', publisher: 'Reflective Publishing', price: 17.99 ,image:'https://m.media-amazon.com/images/I/812Dvn1FLxL._AC_UL320_.jpg'},
    { title: 'Eternal Embers', publisher: 'Flaming Phoenix Books', price: 14.99 ,image:'https://m.media-amazon.com/images/I/81LDi9F3NyL._AC_UL320_.jpg'},
    { title: 'Whispers of Wisdom', publisher: 'Enlightenment Press', price: 12.99 ,image:'https://m.media-amazon.com/images/I/61DIS-uhZcL._AC_UL320_.jpg'},
    { title: 'Dreams of Destiny', publisher: 'Destiny Books', price: 11.49,image:'https://m.media-amazon.com/images/I/810ZaSf03nL._AC_UL320_.jpg' },
    { title: 'Echoes of Enchantment', publisher: 'Enchanted Tales Publishing', price: 15.49 ,image:'https://m.media-amazon.com/images/I/61Iq2MwvvWL._AC_UL320_.jpg'},
    { title: 'Mystic Meadows', publisher: 'Mystical Publications', price: 13.99 ,image:'https://m.media-amazon.com/images/I/71Ro5NUIQQL._AC_UL320_.jpg'},
    { title: 'Chronicles of Chaos', publisher: 'Chaos Publishing', price: 18.99 ,image:'https://m.media-amazon.com/images/I/71uRu9azSPL._AC_UL320_.jpg'},
    { title: 'Whispers from the Wilderness', publisher: 'Wilderness Books', price: 9.99 ,image:'https://m.media-amazon.com/images/I/91-6R0VxRiL._AC_UL320_.jpg'},
    { title: 'Songs of Serendipity', publisher: 'Harmony House', price: 12.99 ,image:'https://m.media-amazon.com/images/I/91NTfXP3+AL._AC_UL320_.jpg'},
    { title: 'Echoes of Elysium', publisher: 'Elysian Press', price: 14.99 ,image:'https://m.media-amazon.com/images/I/81DV5Kat87L._AC_UL320_.jpg'},
    { title: 'Glimpses of Grace', publisher: 'Divine Books', price: 11.99 ,image:'https://m.media-amazon.com/images/I/714BR0qZlYL._AC_UL320_.jpg'},
  ];


  // constructor(private bookService:BookService,private router:Router){}

  // goDetails(item:book){
  //   this.bookService.book = item;

  //   this.router.navigate(['productdetails']);
  // }



  countArray(n:number)
  {
    return Array(n);
  }

}
