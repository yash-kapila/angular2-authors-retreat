import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthorsModel } from '../../models/authors.model';
import { CONFIG } from '../config';

let urls = CONFIG.baseUrls.authors;

@Injectable()
export class AuthorsService {

  constructor(private _http: Http) { }

  getAuthors(): Observable<AuthorsModel[]>{
    return this._http.get(urls.allAuthors)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getAuthorById(id: number): Observable<AuthorsModel>{
    return this._http.get(`${urls.authorById}/${id}`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  saveNewAuthor(author): Observable<AuthorsModel>{
    return this._http.post(urls.newAuthor, author)
    .map(this.extractData)
    .catch(this.handleError);
  }

  deleteAuthor(id: number): Observable<Response>{
    return this._http.delete(`${urls.deleteAuthor}/${id}`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  updateAuthor(author): Observable<AuthorsModel>{
    return this._http.put(urls.updateAuthor, author)
    .map(this.extractData)
    .catch(this.handleError);
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
