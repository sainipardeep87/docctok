import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
// import { LoaderService } from '../loader/loader.service';
import { AngularBearerRequestOptions } from './bearer.request.options';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators/catchError';
// import { FlashMessagesService } from '../flash-messages';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable()
export class HttpService extends HttpClient {

    private loaderActive = true;
    private loaderUrl =[ 
        environment.apiURL+'api/v1/commons/available_names', 
        environment.apiURL+'api/v1/commons/available_email'
    ]

    constructor(
        handler: HttpHandler,
        // backend: XHRBackend,
        // defaultOptions: AngularBearerRequestOptions,
        private spinnerService: Ng4LoadingSpinnerService,
        // private router: Router,
       
    ) {
        super(handler);
    }

    get(url: string): Observable<any> {
        return super.get(url)
        .catch(this.onCatch)
        .do((res: Response) => {
            this.onSuccess(res);
        }, (error: any) => {
            this.onError(error);
        })
        .finally(() => {
            this.onEnd();
        });
    }

    // get(url: string, options?: RequestOptionsArgs): Observable<any> {
    //     this.showLoader(url);
    //     return super.get(url, this.requestOptions(options))
    //         .catchError(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }

    post(url: string, body: any): Observable<any> {
        this.showLoader(url);
        return super.post(url, body)
            // .catchError(this.onCatch)
            .subscribe((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            // .finally(() => {
            //     this.onEnd();
            // });
    }

    // put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    //     this.showLoader(url);
    //     return super.put(url, body, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }
    /**
     * Performs a request with `delete` http method.
     */
    // delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     this.showLoader(url);
    //     return super.delete(url, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }
    /**
     * Performs a request with `patch` http method.
     */
    // patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    //     this.showLoader(url);
    //     return super.patch(url, body, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }
    /**
     * Performs a request with `head` http method.
     */
    // head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     this.showLoader(url);
    //     return super.head(url, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }
    /**
     * Performs a request with `options` http method.
     */
    // options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     this.showLoader(url);
    //     return super.options(url, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new AngularBearerRequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        return options;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(response: Response): void {
        let res = response.json()
        if(res.status == 401){
            localStorage.removeItem('user_token')
            window.location.replace('users/login')
        }else if(res.status == 402){
            localStorage.removeItem('user_token')
            window.location.replace('country-unavailable')
        }
        if (res.status != 200){
            throw ( JSON.stringify(res) );
        }
        console.log('Request successful');
    }

    private onError(res: Response): void {
        if(res.status == 401){
            localStorage.removeItem('user_token')
            window.location.replace('users/login')
        }
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        this.spinnerService.hide();
        // this.hideLoader();
    }

    private showLoader(url): void {
        let urlArr = url.split('?')
        if (this.loaderUrl.includes(urlArr[0])){
            return
        }else{
            this.spinnerService.show();
        }
    }

    private hideLoader(): void {
        this.loaderActive = true;
        // this.loaderService.hide();
    }
    public disableLoaderForRequest() {
        this.loaderActive = false;
    }
    public enableLoader() {
        this.loaderActive = true;
    }
}
