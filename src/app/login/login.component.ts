import { Component, OnInit } from '@angular/core';

import { UserprofileService } from '../core/services/userprofile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(
    private _userProfileService: UserprofileService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this._userProfileService.getLoggedInStatus();
  }

  login(): void{
    this.isUserLoggedIn = true;
    this._userProfileService.setLoggedInStatus(this.isUserLoggedIn);
  }

  logout(): void{
    this.isUserLoggedIn = false;
    this._userProfileService.setLoggedInStatus(this.isUserLoggedIn);
  }

}
