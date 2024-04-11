import { Injectable } from "@angular/core";
import { AllowAccessModel } from "src/app/authentication/Model/Response/allow-access.model";

@Injectable({
    providedIn:'root'
})
export class SellerService{

    seller!:AllowAccessModel;

}