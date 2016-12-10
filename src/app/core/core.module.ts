import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavtabsComponent } from './navtabs/navtabs.component';
import { AuthorsService } from './services/authors.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    NavtabsComponent
  ],
  providers:[
    AuthorsService
  ],
  exports: [   
    NavtabsComponent
  ]
})
export class CoreModule { }
