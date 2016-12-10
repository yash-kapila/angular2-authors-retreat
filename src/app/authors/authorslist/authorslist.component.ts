import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorsModel } from '../../models/authors.model';
import { AuthorsService } from '../../core/services/authors.service';

@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.css']
})
export class AuthorslistComponent implements OnInit {
  authors: AuthorsModel[];

  constructor(
    private _authorsService: AuthorsService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._authorsService.getAuthors().subscribe(
      response => {
        this.authors = response['data'];
      }
    )
  }

  addNewAuthor(): void{
    this._router.navigate['/authors', 'new'];
  }

}
