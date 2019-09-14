import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristicoPage } from './turistico.page';

describe('TuristicoPage', () => {
  let component: TuristicoPage;
  let fixture: ComponentFixture<TuristicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
