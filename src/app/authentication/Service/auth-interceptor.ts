import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class authInterceptor implements HttpInterceptor
{


    constructor(private authserv:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const authReq = req.clone(
            {setHeaders:{'autherisation':`Bearer ${this.authserv.getTokenFromStorage}`}}
        );

        return next.handle(req);
    }
    
}
