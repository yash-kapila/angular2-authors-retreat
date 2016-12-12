import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksdetailsComponent } from './booksdetails/booksdetails.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { NewbookComponent } from './newbook/newbook.component';

const routes: Routes = [
  { 
    path: '', 
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookslistComponent
      },
      {
        path: 'new',
        component: NewbookComponent
      },
      {
        path: ':id',
        component: BooksdetailsComponent
      }
    ] 
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BooksRoutingModule { }