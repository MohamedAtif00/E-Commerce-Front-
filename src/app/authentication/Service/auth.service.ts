import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)

export class AuthService{

    get getTokenFromStorage()
    {
        return localStorage.getItem("auth_bearer_token");
    }

    setTokenInStorage(token:string)
    {
        localStorage.setItem("auth_bearer_token",token)
    }

}