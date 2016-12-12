import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BooksComponent } from './books.component';
import { BooksdetailsComponent } from './booksdetails/booksdetails.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { NewbookComponent } from './newbook/newbook.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksComponent, 
    BooksdetailsComponent, 
    BookslistComponent, 
    NewbookComponent
  ]
})
export class BooksModule { }
