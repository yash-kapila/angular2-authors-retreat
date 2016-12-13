import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { NavtabsComponent } from './navtabs/navtabs.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { AuthorsService } from './services/authors.service';
import { BooksService } from './services/books.service';
import { UserprofileService } from './services/userprofile.service';
import { AuthguardService } from './services/authguard.service';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  imports: [
    RouterModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    NavtabsComponent,
    ModalComponent,
    SpinnerComponent
  ],
  providers:[
    AuthorsService,
    BooksService,
    UserprofileService,
    AuthguardService,
    SpinnerService
  ],
  exports: [   
    NavtabsComponent,
    ModalComponent,
    SpinnerComponent
  ]
})
export class CoreModule { } 
