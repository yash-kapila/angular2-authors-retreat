import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BooksModel } from '../../models/books.model';
import { BooksService } from '../../core/services/books.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {
  books: BooksModel[];

  constructor(
    private _router: Router,
    private _booksService: BooksService
  ) { }

  ngOnInit() {
  }

}
