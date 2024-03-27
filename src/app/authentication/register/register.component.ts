import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { PasswordValidators } from '../Validators/PasswordValidators';
import { registerService } from '../Service/register.service';
import { registerRequest } from '../Model/Request/register-request';
import { Observable, catchError, map, of } from 'rxjs';
import { CheckUsernameRequest } from '../Model/Request/checkusername-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  registerForm!:FormGroup;
  info!:registerRequest;
  usernameRequest!:CheckUsernameRequest;

  submitted = false;
  isWorking = false;


  constructor(private formbuilder:FormBuilder,private registerServ:registerService){}

  ngOnInit(): void {
    this.registerForm = new FormGroup
    (
        {
          firstName:new FormControl('',[Validators.required]),
          lastName: new FormControl('', [Validators.required]),
          username: new FormControl('', [Validators.required],[this.CheckUsername()]),
          email: new FormControl('', [Validators.required, Validators.email]),

          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            PasswordValidators.patternValidator(/\d/, { requiresDigit: true }), // Requires at least one digit
            PasswordValidators.patternValidator(/[A-Z]/, { requiresUppercase: true }), // Requires at least one uppercase letter
            PasswordValidators.patternValidator(/[a-z]/, { requiresLowercase: true }), // Requires at least one lowercase letter
            PasswordValidators.patternValidator(/[$@^!%*?&]/, { requiresSpecialChars: true }) // Requires at least one special character
          ]),
          confirmPassword: new FormControl('', [Validators.required])
        },
      {
        validators:PasswordValidators.MatchValidator
      }
    );
  }


  submitForm() {
    //if (this.registerFor) {
      console.log(this.registerForm);
      // Perform form submission logic here
    //}

    this.info = {
      firstName:this.registerForm.controls['firstName'].value,
      lastName:this.registerForm.controls['lastName'].value,
      username:this.registerForm.controls['username'].value,
      email:this.registerForm.controls['email'].value,
      password:this.registerForm.controls['password'].value,
      phoneNumber:'123123',
      role:'sdas'
    }

    if(this.registerForm.valid)
    {
      this.registerServ.CreateRegister(this.info).subscribe((data)=>{
        console.log(data);
        
      });
    }
  }


   // convenience getter for easy access to form controls
   get f() {
    return this.registerForm.controls;
  }

  //password

  get passwordValid() {
    return this.registerForm.controls["password"].errors === null;
  }

  get passwordTouched():boolean {
    return this.registerForm.controls["password"].touched
  }

  get requiredValid() {
    return !this.registerForm.controls["password"].hasError("required");
  }

  get minLengthValid():boolean {
    return !this.registerForm.controls["password"].hasError("minlength");
  }

  get minLengthInValid() {
    return this.registerForm.controls["password"].hasError("minlength");
  }

  get maxLengthValid() {
    return !this.registerForm.controls["password"].hasError("maxlength");
  }

  get requiresDigitValid() {
    return !this.registerForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.registerForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.registerForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.registerForm.controls["password"].hasError("requiresSpecialChars");
  }

  

  // end password

  // first name 
  get firstNameTouched():boolean
  {
    return this.registerForm.controls["firstName"].touched
  }
  
  get firstNameValid():boolean
  { 
    return this.registerForm.controls["firstName"].valid
  }

  get firstNameInvalid():boolean
  {
    return this.registerForm.controls["firstName"].invalid
  }

  // end first name

  // last name 

  get lastNameTouched()
  {
    return this.registerForm.controls['lastName'].touched
  }

  get lastNameValid()
  {
    return this.registerForm.controls['lastName'].valid
  }

  // end last name

  // username

  get usernameTouched()
  {
    return this.registerForm.controls['username'].touched
  }

  get usernameValid()
  {
    return this.registerForm.controls['username'].valid
  }

  get usernameTaken()
  {
    return this.registerForm.controls['username'].hasError('nameTaken')
  }

  CheckUsername():AsyncValidatorFn
  {
    return (AbstractControl):Observable<ValidationErrors|null> =>{
      let username = this.registerForm.controls['username'].value;
      this.usernameRequest = {username:username}
      return this.registerServ.CheckUsername(this.usernameRequest).pipe(
        map((data)=>{
          console.log(data.value);
          
          return data.value?{nameTaken:true}: null
        }),
        catchError(() => of(null))
      );
    }
  }


  // end username

  //Email

  get emailValid():boolean
  {
    return this.registerForm.controls["email"].valid
  }

  get emailTouched():boolean
  {
    return this.registerForm.controls["email"].touched
  }

  //End Email

  // confirm password

  get confirmPasswordTouched() {
    return this.registerForm.controls['confirmPassword'].touched;
  }

  get requiresMatchPassword() {
    return this.registerForm.controls["confirmPassword"].hasError("mismatch");
  }
  // end confirm password





  
 





}
