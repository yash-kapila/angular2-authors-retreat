import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorsModel } from '../models/authors.model';
import { AuthorsService } from '../core/services/authors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authors: AuthorsModel[];

  constructor(
    private _authorsService: AuthorsService,
    private _router: Router) 
    { }

  ngOnInit() {
    this._authorsService.getAuthors().subscribe(
      response => {
        this.authors = response['data'];
      } 
    );
  }

  fetchAuthorDetails(author): void{
    this._router.navigate(['/authors', author.id]);
  }
}