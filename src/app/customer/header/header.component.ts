import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs';
import { CategoryService } from '../Shared/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/authentication/Service/auth.service';
import { CategoryModel } from '../Model/Category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements AfterViewInit,OnDestroy,OnInit{

  seeallActive:boolean = false;
  authorized!:boolean;
  categories!:CategoryModel[];
  firstThreeElements!:CategoryModel[]; 
  restElements!:CategoryModel[]; 

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

   observer!: MutationObserver;

   constructor(private route:ActivatedRoute,private categoryserv:CategoryService,private authserv:AuthService){}

  ngAfterViewInit() {


    console.log('change');
    // Access the native element using this.canvas.nativeElement
    const canvasElement = this.canvas.nativeElement as HTMLElement;
    
    // Create a new MutationObserver
    this.observer = new MutationObserver((mutations) => {
      // Handle mutations here
      console.log('Changes detected:', mutations);
      let menu = document.getElementById('main-menu') as HTMLElement;
      if(!canvasElement.classList.contains('show')){  
        if(menu.style.transform != 'translatex(0)'){
          this.back()
        }
      }
    });
    
    // Start observing the target node (canvas element) for changes in attributes or child nodes
    this.observer.observe(canvasElement, { attributes: true, childList: true, subtree: true });
  }

  ngOnInit(): void {
    this.authserv.getTokenFromStorage();
    if(this.authserv.authorized) {this.authorized = true;}
    else {this.authorized = false;}
    console.log(this.authserv.authorized);
    


    this.categoryserv.getAllCategories().subscribe(data =>{
      console.log(data);
      this.firstThreeElements = data.slice(0,3);
      this.restElements = data.slice(3);
    })
    
  }

  ngOnDestroy() {
    // Disconnect the observer when the component is destroyed to prevent memory leaks
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  back()
  {
    let menu = document.getElementById('main-menu') as HTMLElement;

    menu.style.transform = 'translatex(0)'

  }

  showSubMenu(category:string)
  {
    let menu = document.getElementById('main-menu') as HTMLElement;
    menu.style.transform = 'translatex(-50%)'
  }

  collaps()
  {
    var col = document.getElementById('collaps') as HTMLElement;
    var image = document.getElementById('updownarrow') as HTMLImageElement;
    if(col.classList.contains('collapsed'))
    {
      image.src = '../../../assets/chevron_down_96px.png'
    }else
    {
      image.src = '../../../assets/chevron_up_96px.png'
    }
  }

  countArray(n:number)
  {
    return Array(n);
  }

  

}
