import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { User } from '../services/user';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  user =new User();

  errorMassage='';

  constructor( private router:Router,private route :ActivatedRoute,private service:RegistrationService){}
  loginuser(){
      this.service.registerUserFromRemote(this.user).subscribe(

        data =>{
          console.log("responce received");
          alert('register Success');
          this.router.navigate(['/login'])
        },
        error => {
          console.log("exception occured");
          this.errorMassage="Bad Credentials"; }

      )

   

  }

  printInfo(){
    console.log("Testing")
    console.log(this.user);
  }

  ngOnInit(): void {

  }

}














































// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import {
//   AbstractControl,
//   FormControl,
//   FormGroup,
//   ValidationErrors,
//   ValidatorFn,
//   Validators,
// } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent implements OnInit {
//   registrationForm: FormGroup;
//   user: any = {};
//   userSubmitted: boolean;

//   //Check if passwords match
//   checkPasswords: ValidatorFn = (
//     group: AbstractControl
//   ): ValidationErrors | null => {
//     let pass = group.get('password').value;
//     let confirmPass = group.get('cpassword').value;
//     return pass === confirmPass
//       ? null
//       : {
//           notSame: true,
//         };
//   };

//   constructor() {}

//   ngOnInit() {
//     this.registrationForm = new FormGroup(
//       {
//         fname: new FormControl(null, Validators.required),
//         sname: new FormControl(null, Validators.required),
//         email: new FormControl(null, [Validators.required, Validators.email]),
//         password: new FormControl(null, [
//           Validators.required,
//           Validators.minLength(8),
//         ]),
//         cpassword: new FormControl(null, [
//           Validators.required,
//           Validators.minLength(8),
//         ]),
//       },
//       this.checkPasswords
//     );
//   }

//   onSubmit() {
//     console.log(this.registrationForm);
//     console.log(this.findInvalidControls());
//     this.userSubmitted = true;
//     if (this.registrationForm.valid) {
//       this.user = Object.assign(this.user, this.registrationForm.value);
//       this.addUser(this.user);
//       this.userSubmitted = false;
//     }
//   }

//   public findInvalidControls() {
//     const invalid = [];
//     const controls = this.registrationForm.controls;
//     for (const name in controls) {
//       if (controls[name].invalid) {
//         invalid.push(name);
//       }
//     }
//     return invalid;
//   }

//   addUser(user: any) {
//     let users = [];
//     if (localStorage.getItem('Users')) {
//       users = JSON.parse(localStorage.getItem('Users'));
//       users = [user, ...users];
//     } else {
//       users = [user];
//     }
//     localStorage.setItem('Users', JSON.stringify(users));
//   }
// }


