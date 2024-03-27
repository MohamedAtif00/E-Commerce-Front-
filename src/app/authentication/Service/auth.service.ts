import { Injectable, OnInit } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)

export class AuthService implements OnInit{
    ngOnInit(): void {
        
    }

    authorized!:boolean;

    getTokenFromStorage()
    {
        let token = localStorage.getItem("auth_bearer_token");
        if(!token) {this.authorized = false}else{this.authorized = true};
        return token
    }

    setTokenInStorage(token:string)
    {
        localStorage.setItem("auth_bearer_token",token)
    }

}