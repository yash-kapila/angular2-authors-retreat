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
    this._booksService.getBooks().subscribe(
      response => {
        this.books = response;
        this.books.sort(function(a,b){
          return a.name.toUpperCase() > b.name.toUpperCase();
        });
      }
    )
  }

  addNewBook(): void{
    this._router.navigate(['/books', 'new']);
  }

  goToBookDetails(book): void{
    this._router.navigate(['/books', book.id]);
  }

}
