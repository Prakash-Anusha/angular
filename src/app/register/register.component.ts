import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  status = false;
  errorStatus = false;
  constructor(private loginService: LoginServiceService) { 
    this.status = false;
    this.errorStatus = false;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      emailId : new FormControl('', [Validators.required]),
      password  : new FormControl('', [Validators.required]),
      confirmPassword : new FormControl('', [Validators.required])
    });
  }

  send(registerForm) {
    this.loginService.addCompany(registerForm.value).subscribe(
      data => {
        console.log("true register")
        this.status = true;
      },
      (responseError) => {
        if(responseError.error.message === 'User Already exist!! Try with some other emailId') {
          this.errorStatus = true;
        }
      });
  }

}
