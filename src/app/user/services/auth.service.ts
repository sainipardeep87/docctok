import { Injectable } from '@angular/core';
import { AuthApiEndPoints } from '../../app.config';
import { HttpService } from '../../core/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    private userUrl: string = AuthApiEndPoints.apiEndpoint;
    protected headers: Headers
    constructor(private http: HttpService, private httpClient: HttpClient) { }
    
        
        login(payload){
            return this.httpClient.post(this.userUrl + '/login', payload)
        }
    
        register(payload){
            return this.httpClient.post(this.userUrl + '/register', payload)
        }

        // sendOtp(payload){
        //     return this.http.post(this.optUrl, payload).map(response => response.json());
        // }

        // verifyOtp(payload){
        //     return this.http.post(this.optUrl + '/verify_token', payload).map(response => response.json());
        // }

        // resendConfirmEmail(payload){
        //     return this.http.post(this.userUrl + '/resend_confirmation_email', payload).map(response => response.json());
        // }

        // confirmUser(payload){
        //     return this.http.get(this.userUrl + '/confirmations/confirmed?confirmation_token=' + payload).map(response => response.json());
        // }

        // requestResetPassword(payload){
        //     return this.http.post(this.userUrl + '/password', payload).map(response => response.json());
        // }

        // verifyPasswordToken(payload){
        //     return this.http.get(this.userUrl + '/password/verify_token?reset_password_token=' + payload).map(response => response.json());
        // }

        // resetPassword(payload, user_id){
        //     return this.http.put(this.userUrl + '/reset_password', payload).map(response => response.json());
        // }

        // socialLogin(payload){
        //     return this.http.post(this.userUrl + '/social_login', payload).map(response => response.json());
        // }

        // // checkDisplayNameAvaialbility(palyload){
        // //     return this.http.get(this.userUrl + '/password/verify_token').map(response => response.json());
        // // }

        // logout(){
        //     return this.http.delete(this.userUrl + '/logout').map(response => response.json());
        // }
    }
    
