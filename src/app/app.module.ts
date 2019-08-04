import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AuthenticationService } from './user/services/auth.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from './app.config';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientJsonpModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  exports:[
   MaterialAppModule
  ],
  providers: [
    AppConfig,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
