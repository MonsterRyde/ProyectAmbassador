import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { ApiResponseComponent } from './componentes/api-response/api-response.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApiResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
