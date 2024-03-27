import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { registerRequest } from "../Model/Request/register-request";
import { CheckUsernameRequest } from "../Model/Request/checkusername-request";

@Injectable(
    {
        providedIn:'root'
    }
)
export class registerService{

    register:string = 'http://localhost:5119/api/Authentication/Register'
    checkeUsername:string = 'http://localhost:5119/api/Authentication/checkusername'


    constructor(private http:HttpClient){}

    CreateRegister(body:registerRequest)
    {
        return this.http.post<any>(this.register,body);
    }

    CheckUsername(username:CheckUsernameRequest)
    {
        return this.http.post<any>(this.checkeUsername,username);
    }

}