import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BodyComponent } from "./body/body.component";
import { ManagementComponent } from "./body/management/management.component";
import { ProductsListComponent } from "./body/management/products-list/products-list.component";
import { ProductDetailsComponent } from "./body/management/product-details/product-details.component";


const routes:Routes=[
    {path:'',component:HomeComponent,children:[
        {path:'',component:BodyComponent,children:[
            {path:'management',component:ManagementComponent,children:[
                {path:'',component:ProductsListComponent},
                {path:'product-details',component:ProductDetailsComponent}
            ]}
        ]}
    ]}
]


@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class SellerRoutingModule{

}