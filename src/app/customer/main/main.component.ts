import { Component } from '@angular/core';
import { SearchService } from '../Shared/Search/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'E-Commerce';
  searchActive:boolean  = false;



  constructor(private search:SearchService){}

  ngOnInit(): void {
    this.search.searchActive.subscribe((value) =>{
      this.searchActive = value;
    });
  }
}
