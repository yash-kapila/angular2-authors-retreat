import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorsService } from '../../core/services/authors.service';
import { AuthorsModel } from '../../models/authors.model';

@Component({
  selector: 'app-authorsdetails',
  templateUrl: './authorsdetails.component.html',
  styleUrls: ['./authorsdetails.component.css']
})
export class AuthorsdetailsComponent implements OnInit {
  author: AuthorsModel;
  authorCopy: AuthorsModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authorsService: AuthorsService
  ) {
    // initialize this.author otherwise template ngModel would throw error
    this.author = new AuthorsModel();
  }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];

    this._authorsService.getAuthorById(id).subscribe(
      data => {
        this.author = data;
        this.createAuthorCopyObject();
      }
    )
  }

  cancelChanges(): void{
    this.author = this.authorCopy;
    this.createAuthorCopyObject();
  }

  createAuthorCopyObject(): void{
    this.authorCopy = Object.assign({}, this.author);
  }

  saveChanges(): void{

  }

  deleteRecord(): void{
    
  }

}
