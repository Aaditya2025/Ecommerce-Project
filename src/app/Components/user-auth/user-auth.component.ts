import { Component } from '@angular/core';
import { SignUp } from 'src/app/data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  signUp(value:SignUp){
    console.log("Sign Up data", value); 
  }

}
