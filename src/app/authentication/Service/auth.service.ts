import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AllowAccessModel } from "../Model/Response/allow-access.model";

@Injectable(
    {
        providedIn:'root'
    }
)

export class AuthService implements OnInit{


    ngOnInit(): void {
        if(this.getTokenFromStorage()) this.authorized = true
    }

    allowAccessLink:string = 'http://localhost:5119/api/Authentication/allowAccess/'

    constructor(private http:HttpClient){}

    authorized!:boolean;
    token?:string;

    getTokenFromStorage()
    {
        this.token = localStorage.getItem("auth_bearer_token")?.toString();
        if(!this.token) {this.authorized = false}else{this.authorized = true};
        return this.token
    }

    setTokenInStorage(token:string)
    {
        localStorage.setItem("auth_bearer_token",token)
    }

    clearToken(){
        localStorage.removeItem('auth_bearer_token')
        this.authorized = false
    }
    

    // Seller section
    
    AllowAccess()
    {
        if(!this.token) this.getTokenFromStorage();

        return this.http.get<AllowAccessModel>(this.allowAccessLink+this.token,{observe:'response'});
    }

}