import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toster: ToastrService,
  ) { 
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  moveToRegister(){
    this.router.navigate(['users/register'])
  }
  
  submitForm(event){
    event.preventDefault();
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value)        
      .subscribe(
        data => {
          // localStorage.setItem('user_token', data.response.auth_token)
          this.toster.success('Signed in Successfully.')
        },
        error => {
          this.toster.error(JSON.parse(error).message);
        }
      );
    }
  }
}

