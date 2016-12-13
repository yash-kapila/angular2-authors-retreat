import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  showSpinner: boolean;
  private subject: Subject<boolean>;

  constructor() { 
    this.showSpinner = false;
    this.subject = new Subject<boolean>();
  }

  setSpinnerStatus(value): void{
    this.showSpinner = value;
    this.subject.next(this.showSpinner);
  }

  getSpinnerStatus(): Observable<boolean>{
    return this.subject.asObservable();
  }

}