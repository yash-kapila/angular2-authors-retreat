import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BooksModel } from '../../models/books.model';
import { CONFIG } from '../config';

let urls = CONFIG.baseUrls.books;

@Injectable()
export class BooksService {

  constructor(private _http: Http) { }

  getBooks(): Observable<BooksModel[]>{
    return this._http.get(urls.allBooks)
    .map((resp: Response) => resp.json());
  }

  getBookById(id: number): Observable<BooksModel>{
    return this._http.get(`${urls.bookById}/${id}`)
    .map((resp: Response) => resp.json());
  }

  saveNewBook(book): Observable<BooksModel>{
    return this._http.post(urls.newBook, book)
    .map((resp: Response) => resp.json());
  }

  deleteBook(id: number): Observable<Response>{
    return this._http.delete(`${urls.deleteBook}/${id}`)
    .map((resp: Response) => resp.json());
  }

  updateBook(author): Observable<BooksModel>{
    return this._http.put(urls.updateBook, author)
    .map((resp: Response) => resp.json());
  }

}
