import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/Service/auth.service';
import { loginService } from 'src/app/authentication/Service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  authorized!:boolean;
  constructor(private auth:AuthService,private loginServ:loginService){}

  ngOnInit(): void {
    this.authorized = this.auth.authorized
  }

  logout()
  {
    this.loginServ.Logout()
    this.authorized  = this.auth.authorized
    console.log(this.authorized);
    
  }
}
