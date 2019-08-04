import { BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AngularBearerRequestOptions extends BaseRequestOptions {

    public token: string;

    constructor(angularReduxOptions?: any) {

        super();

        const access_token = localStorage.getItem('auth_token');
        const user_token = localStorage.getItem('user_token')
        this.token = user_token ? user_token : access_token
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.token);
        if (angularReduxOptions != null) {
            for (const option in angularReduxOptions) {
                const optionValue = angularReduxOptions[option];
                this[option] = optionValue;
            }

        }
    }
}
