import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Share/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {


  constructor(private productServ:ProductService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe((data:any)=>{
      console.log(data[0].value);
      this.productServ.products = data[0].value
    });
  }


}
