import { Component, OnInit } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean;

  constructor(
    private _spinnerService: SpinnerService
  ) { 
    this.showSpinner = false;
  }

  ngOnInit() {
    this._spinnerService.getSpinnerStatus().subscribe(
      value => {
        this.showSpinner = value;
      }
    )
  }

}