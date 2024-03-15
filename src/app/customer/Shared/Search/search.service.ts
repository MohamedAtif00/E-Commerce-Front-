import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  isSearchActive:boolean = false;
  searchActive = new EventEmitter<boolean>();
  constructor() { }

  SearchActivated(value:boolean)
  {
    this.isSearchActive= value;
    this.searchActive.emit(value);
  }
}
