import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit,OnDestroy {

  seeallActive:boolean = false;

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

   observer!: MutationObserver;

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

  seeall()
  {
    this.seeallActive = !this.seeallActive
    let seeall = document.getElementById('seeall') as HTMLElement;
    let updownarrow = document.getElementById('updownarrow') as HTMLImageElement;
    if(this.seeallActive)
    {
      seeall.style.transform = 'translateY(0%)';
      updownarrow.src =  '../../assets/chevron_up_96px.png';
    }else{
      seeall.style.transform = 'translateY(-84%)';
      updownarrow.src =  '../../assets/chevron_down_96px.png';
    }
  }

  countArray(n:number)
  {
    return Array(n);
  }
}
