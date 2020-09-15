import { AdalService } from 'adal-angular4';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from './environment';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly adal: AdalService) {
    //this.adal.handleWindowCallback();
  }

  canActivate(): boolean {
    return true;
    this.adal.init(environment.config);
    this.adal.handleWindowCallback();

    if (this.adal.userInfo.authenticated) {
      return true;
    }
    this.adal.login();
    return false;
  }
}
