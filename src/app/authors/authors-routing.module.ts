import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { AuthorsdetailsComponent } from './authorsdetails/authorsdetails.component';
import { NewauthorComponent } from './newauthor/newauthor.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthorsComponent,
    children: [
      {
        path: '',
        component: AuthorslistComponent
      },
      {
        path: ':id',
        component: AuthorsdetailsComponent
      },
      {
        path: 'new',
        component: NewauthorComponent
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
export class AuthorsRoutingModule { }