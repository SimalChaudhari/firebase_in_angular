import { Component, OnInit } from  '@angular/core';
import { AuthService } from  '../auth/auth.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
selector:  'app-login',
templateUrl:  './register.component.html',
styleUrls: ['./register.component.css']
})

export  class  RegisterComponent  implements  OnInit {
    loginForm: FormGroup;
    constructor(public authService:  AuthService, private fb: FormBuilder) {}

    ngOnInit() {}
}