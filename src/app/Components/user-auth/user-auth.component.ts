import { Component } from '@angular/core';
import { Login, SignUp } from 'src/app/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  showLogin:boolean=true;

  constructor(private user: UserService) { }

  ngONInit(): void {
    this.user.userAuthReload();
  }

  signUp(value:SignUp){
    this.user.userSignUp(value);
    console.log(value);
    
  }

  logIn(value:Login){
    this.user.userLogIn(value);
    console.log(value);
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }
}
