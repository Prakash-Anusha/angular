import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorStatus = false;
  constructor(private loginService: LoginServiceService, private router: Router) { 
    this.errorStatus =false;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailId : new FormControl('', [Validators.required]),
      password  : new FormControl('', [Validators.required])
    });
  }

  send(loginForm) {
    this.loginService.validate(loginForm.value.emailId, loginForm.value.password).subscribe(
      data => {
        if(data === true) {
          console.log("true logins")
          this.router.navigate(['/home']);
        }
        else {
          this.errorStatus = true;
        }
      },
      (responseError) => {
        // if(responseError.error.message === 'Incorrect Username or Password') {
          this.errorStatus = true;
       // }
      });
  }
}
