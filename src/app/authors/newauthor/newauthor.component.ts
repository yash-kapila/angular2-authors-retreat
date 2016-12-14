import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorsService } from '../../core/services/authors.service';
import { AuthorsModel } from '../../models/authors.model';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  author: AuthorsModel;
  
  constructor(
    private _authorsService: AuthorsService,
    private _router: Router
  ) { 
    this.author = new AuthorsModel();
  }

  ngOnInit() { }

  cancel(): void{
    this._router.navigate(['/authors']);
  }

  save(): void{
    this.author.id = new Date().getTime();

    this._authorsService.saveNewAuthor(this.author).subscribe(
      data => {
        this._router.navigate(['/authors']);
      }
    )
  }

}
