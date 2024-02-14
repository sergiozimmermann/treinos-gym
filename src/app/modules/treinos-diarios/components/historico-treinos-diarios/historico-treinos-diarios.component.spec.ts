/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoricoTreinosDiariosComponent } from './historico-treinos-diarios.component';

describe('HistoricoTreinosDiariosComponent', () => {
  let component: HistoricoTreinosDiariosComponent;
  let fixture: ComponentFixture<HistoricoTreinosDiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoTreinosDiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoTreinosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
