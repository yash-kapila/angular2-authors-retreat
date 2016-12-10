import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthorsModel } from '../../models/authors.model';
import { CONFIG } from '../config';

let urls = CONFIG.baseUrls.authors;

@Injectable()
export class AuthorsService {

  constructor(private _http: Http) { }

  getAuthors(): Observable<AuthorsModel[]>{
    return this._http.get(urls.allAuthors)
    .map((resp: Response) => resp.json());
  }

  getAuthorById(id: number): Observable<AuthorsModel>{
    return this._http.get(`${urls.authorById}/${id}`)
    .map((resp: Response) => resp.json());
  }
}
