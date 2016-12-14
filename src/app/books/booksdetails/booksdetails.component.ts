import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../../core/services/books.service';
import { BooksModel } from '../../models/books.model';

@Component({
  selector: 'app-booksdetails',
  templateUrl: './booksdetails.component.html',
  styleUrls: ['./booksdetails.component.css']
})
export class BooksdetailsComponent implements OnInit {
  book: BooksModel;
  bookCopy: BooksModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authorsService: BooksService,
    private _router: Router
  ) {
    // initialize this.book otherwise template ngModel would throw error 
    this.book = new BooksModel();
  };

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];

    this._authorsService.getBookById(id).subscribe(
      data => {
        this.book = data;
        this.createBookCopyObject();
      }
    )
  };

  createBookCopyObject(): void{
    this.bookCopy = Object.assign({}, this.book);
  };

  cancel(): void{
    this.book = this.bookCopy;
    this.createBookCopyObject();
  };

  save(): void{
    this._authorsService.updateBook(this.book).subscribe(
      data => {
        this._router.navigate(['/books']);
      }
    )
  };

  delete(): void{
    this._authorsService.deleteBook(this.book.id).subscribe(
      data => {
        this._router.navigate(['/books']);
      }
    )
  };

}
