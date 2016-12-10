import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthorsModel } from '../../models/authors.model';

@Injectable()
export class AuthorsService {
  allAuthors:string = 'api/authors.json';
  authorById:string = 'api/authorsById.json';

  constructor(private _http: Http) { }

  getAuthors(): Observable<AuthorsModel>{
    return this._http.get(this.allAuthors)
    .map((resp: Response) => resp.json());
  }

  getAuthorById(id: number): Observable<AuthorsModel>{
    return this._http.get(this.authorById)
    .map((resp: Response) => resp.json());
  }
}
