import { EventEmitter, Injectable } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUser = new EventEmitter<boolean>(false);

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

  userLogIn(data: Login) {
    this.http.get<Login>(`http://localhost:3000/users?email=${data.email}.com&password=${data.password}`)
    .subscribe((result) => {
      if(result && result.body?.length){ 
        this.invalidUser.emit(false);
        localStorage.setItem('user', JSON.stringify(result.body[0]));
        this.router.navigate(['/'])
      }else{
        this.invalidUser.emit(true);
      }
    })
  };

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);        
    }
  }
}
