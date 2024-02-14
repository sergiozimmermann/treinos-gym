/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaExercicioAtualComponent } from './lista-exercicio-atual.component';

describe('ListaExercicioAtualComponent', () => {
  let component: ListaExercicioAtualComponent;
  let fixture: ComponentFixture<ListaExercicioAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExercicioAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExercicioAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
