import { Component, OnInit } from  '@angular/core';
import { AuthService } from  '../auth/auth.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.css']
})

export  class  LoginComponent  implements  OnInit {
    loginForm: FormGroup;
    constructor(private  authService:  AuthService, private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required ],
            password: ['', Validators.required ]
         });
     }

    ngOnInit() {}

    login(){
        // console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value.email,this.loginForm.value.password);
    }
}