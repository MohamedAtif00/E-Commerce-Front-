import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";
import { AuthService } from "src/app/authentication/Service/auth.service";
import { SellerService } from "../service/seller.service";

@Injectable({
    providedIn:'root'
})
export class SellerCanActivate implements CanActivate{


    constructor(private authServ:AuthService,private router:Router,private sellerServ:SellerService){}

    isAuth:boolean =false;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        let sub = this.authServ.AllowAccess().pipe(map((response)=>{
            if(response.ok)
            {
                let data = response.body
                console.log('true');
                if(data)
                    this.sellerServ.seller = {userId:data.userId,sellerId:data?.sellerId,token:data?.token,username:data.username,role:data.role,email:data.email};
                return true
            }
            return false
         }),catchError(x => this.handleError(x)))

         sub.subscribe();
         return sub
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // Client-side error occurred, handle it accordingly
          console.error('An error occurred:', error.error.message);
        } else {
          // Backend returned an unsuccessful response code
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.message}`);
            
        }
        this.router.navigate([''])
        // Return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
      }




}