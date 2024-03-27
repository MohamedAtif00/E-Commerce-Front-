import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CategoryResolver } from '../Shared/category/category.resolver';


const router:Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:HomeComponent},
    {path:'productlist',component:ProductListComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }
