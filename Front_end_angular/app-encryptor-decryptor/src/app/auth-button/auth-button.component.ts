import { Component, OnInit } from '@angular/core';
//import Auth0
import {AuthService} from '@auth0/auth0-angular'

@Component({
  selector: 'app-auth-button',
  template: ` 
        <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
          <button (click)="auth.logout()"> Log Out </button>
        </ng-container>
        <ng-template #loggedOut>
          <button (click)="auth.loginWithRedirect()">Log In</button>
        </ng-template>

        <ul *ngIf="auth.user$ | async as user">
          <li>{{user.email}}</li>
        </ul>
  
  
  `,
})
export class AuthButtonComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
