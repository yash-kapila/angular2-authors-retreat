import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthorsRoutingModule } from './authors-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AuthorsComponent } from './authors.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { AuthorsdetailsComponent } from './authorsdetails/authorsdetails.component';
import { NewauthorComponent } from './newauthor/newauthor.component';

@NgModule({
  imports: [
    RouterModule,
    AuthorsRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthorsComponent,
    AuthorslistComponent,
    AuthorsdetailsComponent,
    NewauthorComponent
  ]
})
export class AuthorsModule { }
