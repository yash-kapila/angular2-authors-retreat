import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavtabsComponent } from './navtabs/navtabs.component';
import { ModalComponent } from './modal/modal.component';

import { AuthorsService } from './services/authors.service';
import { BooksService } from './services/books.service';
import { UserprofileService } from './services/userprofile.service';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    NavtabsComponent,
    ModalComponent
  ],
  providers:[
    AuthorsService,
    BooksService,
    UserprofileService,
    AuthguardService
  ],
  exports: [   
    NavtabsComponent,
    ModalComponent
  ]
})
export class CoreModule { } 
