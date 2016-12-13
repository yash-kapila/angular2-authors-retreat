import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

import { UserprofileService } from './userprofile.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(
    private _userProfileService: UserprofileService,
    private _router: Router
  ) { }

  canActivate() {
    if(this._userProfileService.getLoggedInStatus())
      return true;
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}