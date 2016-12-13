import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BooksModel } from '../../models/books.model';
import { SpinnerService } from '../spinner/spinner.service';
import { CONFIG } from '../config';

let urls = CONFIG.baseUrls.books;

@Injectable()
export class BooksService {

  constructor(
    private _http: Http,
    private _spinnerService: SpinnerService
  ) { }

  getBooks(): Observable<BooksModel[]>{
    this._spinnerService.setSpinnerStatus(true);
    return this._http.get(urls.allBooks)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => this._spinnerService.setSpinnerStatus(false));
  }

  getBookById(id: number): Observable<BooksModel>{
    this._spinnerService.setSpinnerStatus(true);
    return this._http.get(`${urls.bookById}/${id}`)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => this._spinnerService.setSpinnerStatus(false));
  }

  saveNewBook(book): Observable<BooksModel>{
    this._spinnerService.setSpinnerStatus(true);
    return this._http.post(urls.newBook, book)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => this._spinnerService.setSpinnerStatus(false));
  }

  deleteBook(id: number): Observable<Response>{
    this._spinnerService.setSpinnerStatus(true);
    return this._http.delete(`${urls.deleteBook}/${id}`)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => this._spinnerService.setSpinnerStatus(false));
  }

  updateBook(author): Observable<BooksModel>{
    this._spinnerService.setSpinnerStatus(true);
    return this._http.put(urls.updateBook, author)
    .map(this.extractData)
    .catch(this.handleError)
    .finally(() => this._spinnerService.setSpinnerStatus(false));
  }

  private extractData(resp: Response) {
    return resp.json();
  }

  private handleError(err: Response) {
    let errorMsg = "";
    if(err.status == 504 || err.status == 500){
      errorMsg = "Error while retrieving data from server.";
      return Observable.throw(errorMsg);
    }
    else if(err.status == 401){
      errorMsg = "Unauthorized access to data.";
      return Observable.throw(errorMsg);
    } 
    else{
      errorMsg = "Couldn't retrieve the requested data.";
      Observable.throw(errorMsg);
    }
  }
}
