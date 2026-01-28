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

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(value:SignUp){
    this.user.userSignUp(value);
    
  }

  logIn(value:Login){
    this.user.userLogIn(value);
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }
}
