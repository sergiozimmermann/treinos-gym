/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardExercicioAtualComponent } from './card-exercicio-atual.component';

describe('CardExercicioAtualComponent', () => {
  let component: CardExercicioAtualComponent;
  let fixture: ComponentFixture<CardExercicioAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExercicioAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExercicioAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
