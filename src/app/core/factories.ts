import { XHRBackend } from '@angular/http';
import { AngularBearerRequestOptions } from './../core/http/bearer.request.options';
import { HttpService } from './../core/http/http.service';
// import { LoaderService } from './../core/loader/loader.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpHandler } from '@angular/common/http';
function httpServiceFactory(handler: HttpHandler, loaderService: Ng4LoadingSpinnerService) {
    return new HttpService(handler, loaderService);
}
export { httpServiceFactory };
