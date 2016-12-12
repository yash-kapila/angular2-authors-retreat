import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextPipe } from './filter-text/filter-text.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterTextPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextPipe
  ]
})
export class SharedModule { }
