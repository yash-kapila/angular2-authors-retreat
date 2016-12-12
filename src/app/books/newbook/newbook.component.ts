import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../core/services/books.service';
import { BooksModel } from '../../models/books.model';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  book: BooksModel;

  constructor(
    private _booksService: BooksService,
    private _router: Router
  ) { 
    this.book = new BooksModel();
  }

  ngOnInit() {
  }

  cancel(): void{
    this._router.navigate(['/books']);
  }

  save(): void{
    this.book.id = new Date().getTime();

    this._booksService.saveNewBook(this.book).subscribe(
      data => {
        this._router.navigate(['/books']);
      }
    )
  }

}
