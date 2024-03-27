import { Injectable } from "@angular/core";
import { loginModel } from "../Model/Request/login-request";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class loginService{


    loginLink:string = "http://localhost:5119/api/Authentication/Login";

    constructor(private http:HttpClient){}


    login(login:loginModel)
    {
        return this.http.post<any>(this.loginLink,login);
    }
}