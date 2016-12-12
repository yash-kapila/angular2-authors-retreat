import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _authorsService: AuthorsService,
    private _router: Router
  ) {
    // initialize this.author otherwise template ngModel would throw error
    this.author = new AuthorsModel();
  };

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];

    this._authorsService.getAuthorById(id).subscribe(
      data => {
        this.author = data;
        this.createAuthorCopyObject();
      }
    )
  };

  createAuthorCopyObject(): void{
    this.authorCopy = Object.assign({}, this.author);
  };

  cancel(): void{
    this.author = this.authorCopy;
    this.createAuthorCopyObject();
  };

  save(): void{
    this._authorsService.updateAuthor(this.author).subscribe(
      data => {
        this._router.navigate(['/authors']);
      }
    )
  };

  delete(): void{
    this._authorsService.deleteAuthor(this.author.id).subscribe(
      data => {
        this._router.navigate(['/authors']);
      }
    )
  };

}
