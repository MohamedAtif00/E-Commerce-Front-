import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

interface GroupImgs {
  images: string[];
}

interface GroupBooks{
  books:string[]
}

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.css']
  
})
export class ListCarouselComponent implements OnInit{

  show1:number = 0;
  show2:number = 0;
  show3:number = 0;
  isHovered: boolean = false;

  imgs:Array<string> = [
    'https://m.media-amazon.com/images/I/71fFUd8uf3L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51tCjmrxM5L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51L3RwkaTBL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51L3RwkaTBL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/61DBs1mMg2L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/619KSituLdL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/619KSituLdL._AC_SY200_.jpg'
  ]

  books:Array<string> = [
    'https://m.media-amazon.com/images/I/41yi4TVWREL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41sKk71L1-L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51BGYkauCXL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/412w3Q+sS+L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51MlsPdl6dL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/515Mh-4qzGL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41yi4TVWREL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41sKk71L1-L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51BGYkauCXL._AC_SY200_.jpg',
  ]


  groupsfirst!:GroupImgs[];
  groupbooks!:GroupBooks[];
  ngOnInit(): void {
    this.groupsfirst =  this.splitIntoGroupsofImages(this.imgs);
    console.log(this.groupsfirst);
    
    this.groupbooks = this.splitIntoGroupsofBooks(this.books);
    console.log(this.groupbooks);
    
  }

  splitIntoGroupsofImages(images: string[]):  GroupImgs[] | any{
    const groups: GroupImgs[] = [];
  
    for (let i = 0; i < images.length; i += 4) {
      const groupImages = images.slice(i, i + 5);
      groups.push({ images: groupImages });
    }
  
    return groups;
  }
  
  splitIntoGroupsofBooks(books: string[]):  GroupBooks[] | any{
    const groups: GroupBooks[] = [];
  
    for (let i = 0; i < books.length; i += 4) {
      const groupbooks = books.slice(i, i + 5);
      groups.push({ books: groupbooks });
    }
  
    return groups;
  }
  clicked()
  {
    let elements = document.getElementsByClassName("carousel-item") ;
    let elementsArray = Array.from(elements);

    // for(var element of elementsArray)
    // {
    //   if(!element.classList.contains('active'))
    //   {
    //     setTimeout(() => {
    //       element.classList.add('d-flex')
          
    //     }, 500);
    //   }else{
    //     element.classList.remove('d-flex')
    //   }
    // }
  }
  

  next(i:number)
  {
    let show= 0;
    if(i == 0 ) show = this.show1;
    if(i == 1 ) show = this.show2;
    let element = document.getElementsByClassName('slidee'+i);
    if(!(show < -100) ) {
      
      console.log(show);
      
        show-= 100;
        let elements = Array.from(element);
        elements.forEach((e)=>{
          let myelement = e as HTMLElement;
          myelement.style.transform = `translateX(${show}%)`;
          
        });
        if(i == 0 ) this.show1 = show;
        if(i == 1 ) this.show2 = show;
    }

    

  }

  prev(i:number)
  {
    let show= 0;
    if(i == 0 ) show = this.show1;
    if(i == 1 ) show = this.show2;
    let element = document.getElementsByClassName('slidee'+i);
    if((show != 0) ) {
      
      console.log(show);
      
        show+= 100;
        let elements = Array.from(element);
        elements.forEach((e)=>{
          let myelement = e as HTMLElement;
          myelement.style.transform = `translateX(${show}%)`;
          
        });
        if(i == 0 ) this.show1 = show;
        if(i == 1 ) this.show2 = show;
    }

  }

  hoverdeactive(i:number){
    
    let next = document.getElementById('next'+i) as HTMLElement;
    let prev = document.getElementById('prev'+i) as HTMLElement;
    next.style.transition = 'opacity 0.5s ease 0.5s'
    prev.style.transition = 'opacity 0.5s ease 0.5s'
    if(next.style.opacity != '0') next.style.opacity = '0';
    if(prev.style.opacity != '0') prev.style.opacity = '0';
  }

  hoveractive(i:number)
  {
    let next = document.getElementById('next'+i) as HTMLElement;
    let prev = document.getElementById('prev'+i) as HTMLElement;
    next.style.transition = 'opacity 0.5s ease 0.5'
    prev.style.transition = 'opacity 0.5s ease 0.5'
    if(next.style.opacity != '1') next.style.opacity = '1';
    if(prev.style.opacity != '1') prev.style.opacity = '1';
  }


  countArray(n:number)
  {
    return Array(n);
  }

}
