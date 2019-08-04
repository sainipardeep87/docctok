import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent} from '../user/register/register.component'
import { NgModule } from '@angular/core';
// import { PasswordComponent } from './password/password.component';
// import { SocialLoginComponent } from './social-login/social-login.component';
// import { OtpComponent } from './otp/otp.component';
// import { ErrorComponent } from '../error/error.component';


const userRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'password', component: PasswordComponent},
    // { path: 'social_login', component: SocialLoginComponent},
    // { path: 'otp/:requestFor', component: OtpComponent},
    // { path: 'password/update_password', component: PasswordComponent},

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [
        RouterModule
    ]
})

export class routing {};
