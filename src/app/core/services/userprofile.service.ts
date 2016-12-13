import { Injectable } from '@angular/core';

@Injectable()
export class UserprofileService {
  isUserLoggedIn: boolean;
  
  constructor() { 
    this.isUserLoggedIn = false;
  };

  getLoggedInStatus(): boolean{
    return this.isUserLoggedIn;
  }

  setLoggedInStatus(status): void{
    this.isUserLoggedIn = status;
  }

}