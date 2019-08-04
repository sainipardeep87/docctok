import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestOptions, XHRBackend } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { httpServiceFactory } from './../core/factories';
import { HttpService } from './../core/http/http.service';
import { DateToDaysPipe, OrderBy, GenderPipe } from './core.pipes';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpHandler } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    DateToDaysPipe,
    OrderBy,
    GenderPipe
  ],
  exports: [
    DateToDaysPipe,
    OrderBy,
    GenderPipe
  ],
  providers: [
    Ng4LoadingSpinnerService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [HttpHandler, Ng4LoadingSpinnerService]
    }
  ]
})
export class CoreModule { }
