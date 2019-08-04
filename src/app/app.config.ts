import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';


const _api_end_point_root = environment.apiURL;

export interface AppUrlConfig {
    apiEndpoint: string;
}

// export const CompanyApiEndPoints: AppUrlConfig = {
//     apiEndpoint: _api_end_point_root + 'api/companies/'
// };

export const CommonApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/commons/'
};

export const AuthApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/auth'
};

export const ProfileApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/profiles'
};

export const OtpApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/otps'
};

export const ContestdApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/contests'
};

export const ContestPlayApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/contest_plays'
};

export const ScoreApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/scores'
};

export const PaypalApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/paypal'
};

export const PagesApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/pages'
};

export const NotificationsApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/notifications'
};

export const CashoutApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/cashouts'
};

export const LeaderboardApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/leaderboards'
};

export const NotificatonPreferenceEndPoint: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + '/v1/notification_preferences'
};

export const ContestGroupdApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/contest_groups'
};

export const RewardApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/reward_bonus'
};

export const StatApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/stats'
};

export const LeagueApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/leagues'
};

export const FriendApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/friends'
};

export const FriendRequestsApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/friend_requests'
};

export const OddsApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'v1/odds'
};
export const UtilityEnpPoints = {
    // countryEndPoint: _api_end_point_root + 'api/app/countries/',
    // currencyEndPoint: _api_end_point_root + 'api/app/currencies/',
    configEndPoint: _api_end_point_root + 'oauth/token'
};

@Injectable()
export class AppConfig {

    private config: Object = null;
    private env: Object = null;

    constructor(private http: Http) {

    }

    public getConfig(key: any) {
        return this.config[key];
    }

    // public getEnv(key: any) {
    //     return this.env[key];
    // }

    // public load() {
    //     let data = {
    //         "grant_type": "password", 
    //         "client_id": environment.clientId,
    //         "client_secret": environment.clientSecret, 
    //         "email": environment.email, 
    //         "password": environment.password 
    //     }
    //     let token = localStorage.getItem('auth_token')
    //     if (token){
    //         this.config = {access_token: token}
    //     }else{
    //         return new Promise((resolve, reject) => {
    //             this.http.post(UtilityEnpPoints.configEndPoint, data).map(res => res.json()).catch((error: any): any => {
    //                 console.log('Configuration could not be read');
    //                 resolve(false);
    //             }).subscribe((envResponse) => {
    //                 localStorage.setItem('auth_token', envResponse.access_token)
    //                 this.config = envResponse;
    //                 resolve(true);
    //             });
    //         });
    //     }
    // }
}
