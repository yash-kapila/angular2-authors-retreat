import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavtabsComponent } from './navtabs/navtabs.component';
import { AuthorsService } from './services/authors.service';
import { ModalComponent } from './modal/modal.component';

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
    AuthorsService
  ],
  exports: [   
    NavtabsComponent,
    ModalComponent
  ]
})
export class CoreModule { } 