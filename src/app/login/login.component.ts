import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegistrationService } from '../services/registration.service';
import { User } from '../services/user';
import { loggedInStatus } from 'src/loggedInStatus';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //created useer obj here 
  user = new User();
  msg=' ';
  constructor(private service: RegistrationService, private route :Router ) { }

 
loginUser()
{
 this.service.loginUserFronRemote(this.user).subscribe(
   data =>{ console.log("response received");
   alert('Login Success');
   loggedInStatus.loggedIn = true;
   this.route.navigate(['/films'])
  },
   error => {
     console.log("invalid login credential");
 this.msg="Bad credentials enter valid email id and password";
  }
 )

}
ngOnInit(): void {
} 
// gotoregistration()
// {
//   this._route.navigate(['/registration'])
// }





















  // onLogin(loginForm: NgForm) {
  //   console.log(loginForm.value);
  //   const token = this.authService.authUser(loginForm.value);
  //   if (token) {
  //     localStorage.setItem('token', token.userName);
  //     console.log('Login Success');
  //   } else {
  //     console.log('Login Failed');
  //   }
  // }
}
