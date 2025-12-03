import { Component } from '@angular/core';
import { SignUp } from 'src/app/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  constructor(private user: UserService) { }

  signUp(value:SignUp){
    this.user.userSignUp(value);
  }

}
