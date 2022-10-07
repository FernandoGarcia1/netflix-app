import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/shared/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { MoviesModule } from './components/movies/movies.module';
import { ApiKeyInterceptor } from './service/interceptors/api-key.interceptor';


@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,    
    SharedModule,
    MoviesModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
