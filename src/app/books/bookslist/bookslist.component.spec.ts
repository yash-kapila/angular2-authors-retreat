/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookslistComponent } from './bookslist.component';

describe('BookslistComponent', () => {
  let component: BookslistComponent;
  let fixture: ComponentFixture<BookslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
