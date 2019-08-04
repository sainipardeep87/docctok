import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user.component';
import { routing } from './user.routing';
import { CommonModule } from '@angular/common';

// import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,} from "angular-6-social-login";
// import { RegisterComponent } from './register/register.component';
// import { PasswordComponent } from './password/password.component';
// import { SocialLoginComponent } from './social-login/social-login.component';
// import { TransfereService } from './transfer.service';

// import { MaterialAppModule } from '../ngmaterial.module';
// import { OtpComponent } from './otp/otp.component';
// import { NotifyService } from './password/notify.service';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { MaterialAppModule } from '../ngmaterial.module';
// import { AuthenticationService } from './services/auth.service';
// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

// const fbLoginOptions = {
//   scope: 'email,user_friends, public_profile',
//   return_scopes: true,
//   enable_profile_selector: true
// };

// let config = new AuthServiceConfig([
  
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider(environment.fb_id, fbLoginOptions)
//   }
// ]);
 
// export function provideConfig() {
//   return config;
// }

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        MaterialAppModule,
    ],
    declarations: [
        UserComponent,
        LoginComponent,
        RegisterComponent,
        // LoginComponent,
        // RegisterComponent,
        // PasswordComponent,
        // SocialLoginComponent,
        // OtpComponent,
    ],
    exports:[],
    providers: [
      // TransfereService,
    //   AuthenticationService,
      // CommonService,
      // NotificationService,
      // NotifyService,
      // {
      //   provide: AuthServiceConfig,
      //   useFactory: provideConfig
      // }
    ],
    bootstrap: [UserComponent]
})

export class UserModule { }
