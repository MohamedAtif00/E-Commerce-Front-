import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer/customer.module';

const routes: Routes = [
  {path:'',loadChildren:()=> import('./customer/customer.module').then(x => x.CustomerModule)},
  {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(x => x.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
