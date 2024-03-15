import { Component } from '@angular/core';
import { SearchService } from 'src/app/customer/Shared/Search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  constructor(public search:SearchService){}

  SearchActivated()
  {
   this.search.SearchActivated(true);
  }

  SearchDeactivated()
  {
    this.search.SearchActivated(false);
    
  }

  changed(event:Event)
  {
    const inputValue = (event.target as HTMLInputElement).value;
    // Filter out non-letter characters using a regular expression
    //this.enteredLetters = inputValue.replace(/[^a-zA-Z]/g, '');
    console.log(inputValue); // Print the entered letters to the console
    
  }
}
