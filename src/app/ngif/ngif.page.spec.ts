import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifPage } from './ngif.page';

describe('NgifPage', () => {
  let component: NgifPage;
  let fixture: ComponentFixture<NgifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
