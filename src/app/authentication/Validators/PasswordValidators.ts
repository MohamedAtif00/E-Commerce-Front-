import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {

    constructor(){}

    static patternValidator(regex:RegExp,error:ValidationErrors):ValidatorFn
    {
        return (control:AbstractControl) : { [Key:string]:any}|null =>
        {
            if(!control.value)
            {
                return null;
            }

            // test the value of the control against the regexp supplied.
            let valid = regex.test(control.value);

            // if true, return no error, otherwise return the error object passed in the second parameter.
            return valid ? null:error;
        }
    }

    static MatchValidator(control:AbstractControl) : ValidationErrors | null 
    {
        let password = control.get('password')?.value;
        let confirmPassword = control.get('confirmPassword')?.value;
        

        // if the confirmPassword value is null or empty, don't return an error.
        if(!confirmPassword?.length)
        {
            return null;
        }

        // if the confirmPassword length is < 8, set the minLength error.
        if(confirmPassword.length < 8 )
        {
            
            control.get('confirmPassword')?.setErrors({minLength:true});
        }else{
            // compare the passwords and see if they match.
            if(password !== confirmPassword)
            {
                control.get('confirmPassword')?.setErrors({mismatch:true});
                
            }else{
                // if passwords match, don't return an error.
                return null;
            }
        }
        return null;
    }
}
