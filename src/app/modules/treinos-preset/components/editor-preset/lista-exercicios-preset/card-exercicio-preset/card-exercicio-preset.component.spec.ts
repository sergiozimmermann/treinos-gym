/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardExercicioPresetComponent } from './card-exercicio-preset.component';

describe('CardExercicioPresetComponent', () => {
  let component: CardExercicioPresetComponent;
  let fixture: ComponentFixture<CardExercicioPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExercicioPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExercicioPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
