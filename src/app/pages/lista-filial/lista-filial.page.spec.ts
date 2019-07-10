import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilialPage } from './lista-filial.page';

describe('ListaFilialPage', () => {
  let component: ListaFilialPage;
  let fixture: ComponentFixture<ListaFilialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFilialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
