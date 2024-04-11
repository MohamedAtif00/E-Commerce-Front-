import { Injectable } from "@angular/core";
import { loginModel } from "../Model/Request/login-request";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class loginService{


    loginLink:string = "http://localhost:5119/api/Authentication/Login";
    loginAsSellerLink:string = "http://localhost:5119/api/Authentication/LoginSeller";

    constructor(private http:HttpClient,private auth:AuthService){}


    login(login:loginModel)
    {
        if(this.auth.authorized)
        {
            console.log('already log in');
            return null
            
        }
        return this.http.post<any>(this.loginLink,login);
    }

    LoginAsSeller(login:loginModel)
    {
        return this.http.post<any>(this.loginAsSellerLink,login);
    }

    Logout()
    {
        this.auth.clearToken();
    }
    
}