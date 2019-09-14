import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforPage } from './ngfor.page';

describe('NgforPage', () => {
  let component: NgforPage;
  let fixture: ComponentFixture<NgforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
