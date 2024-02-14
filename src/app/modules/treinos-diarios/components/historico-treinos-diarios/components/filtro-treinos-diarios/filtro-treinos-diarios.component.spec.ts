/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiltroTreinosDiariosComponent } from './filtro-treinos-diarios.component';

describe('FiltroTreinosDiariosComponent', () => {
  let component: FiltroTreinosDiariosComponent;
  let fixture: ComponentFixture<FiltroTreinosDiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroTreinosDiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroTreinosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
