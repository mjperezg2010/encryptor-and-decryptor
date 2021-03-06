import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import Auth0
import {AuthModule} from '@auth0/auth0-angular';

import { AuthButtonComponent } from './auth-button/auth-button.component';
import { PrincipalComponent } from './principal/principal.component'

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-r7o55xy6.us.auth0.com',
      clientId: '7sd02z0G1eHzQCNkfB82awdEGiNuf4Bf'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
