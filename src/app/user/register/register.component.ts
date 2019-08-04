import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  patientForm: FormGroup;
  tab = 'doctor';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toster: ToastrService
  
  ) { 
    // this.registerForm = this.fb.group({
    //   "name": [''],
    //   'email': ['', Validators.required],
    //   'mobile_no': ['', Validators.required],
    //   'password': ['', Validators.required],
    //   'doctor': ['', Validators.required]
    // });

    this.registerForm = this.fb.group({
      "name": ['', Validators.required],
      'email': ['', Validators.required],
      'mobile_no': ['', Validators.required],
      'password': ['', Validators.required],
      'gender': ['', Validators.required],
      'is_doctor':['']
    })
  }

  ngOnInit() {
  }

  switchTab(tab){
    this.tab = tab;
  }

  moveToLogin(){
    this.router.navigate(['users/login'])
  }

  submitForm(event){
    event.preventDefault();
    if (this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe(
        res =>{
          this.toster.success('Registration completed successfully')
        },
        error =>{
          this.toster.error('Something went wrong.')
        }
      ) 
    }
  }

}
