import { Injectable } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(user: SignUp) {
    this.http.post("http://localhost:3000/users", user, {observe:'response'})
    .subscribe((result) => {
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/'])
      }
    })
  }

  userLogIn(user: Login) {
    this.http.get<Login>(`http://localhost:3000/users?email=${user.email}.com&password=${user.password}`)
    .subscribe((result) => {
      if(result){
        console.log(result);
      }
    })
  };

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);        
    }
    }
}
