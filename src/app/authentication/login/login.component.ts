import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../Service/login.service';
import { loginModel } from '../Model/Request/login-request';
import { AuthService } from '../Service/auth.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    seller:new FormControl(false)
  });

  loginInfo!:loginModel;

  constructor(private loginserv:loginService,private authserv:AuthService,private router:Router){}


  submitForm()
  {
    
    console.log(this.loginForm);
    this.loginInfo = {username:this.loginForm.controls['email'].value,password:this.loginForm.controls['password'].value,isSeller:this.loginForm.controls['seller'].value}
    console.log('seller',this.loginInfo.isSeller);
    
    if(!this.loginInfo.isSeller)
    {
      let sub = this.loginserv.login(this.loginInfo)

      if(sub) 
      {
        sub.subscribe((data)=>{
          console.log(data);
    
          if(data.value != null && data.error == null)
          {
            let toke = data.value.jwtToken as string
            this.authserv.setTokenInStorage(toke)
    
            console.log(this.authserv.getTokenFromStorage);
            
            this.router.navigate([''])
          }
          
        });

      }
      

    }else
    {
      this.loginserv.LoginAsSeller(this.loginInfo).subscribe(data=>{

        console.log(data);
        
        if(data.value != null && data.error == null)
        {
          let toke = data.value.jwtToken as string
          this.authserv.setTokenInStorage(toke)
  
          console.log(this.authserv.getTokenFromStorage);
          
          this.router.navigate([''])
        }
      });
    }
    
  }

  get fieldRequired()
  {
    return this.loginForm.controls['email'].hasError('required');
  }

  get emailTouched()
  {
    return  this.loginForm.controls['email'].touched
  }
}
