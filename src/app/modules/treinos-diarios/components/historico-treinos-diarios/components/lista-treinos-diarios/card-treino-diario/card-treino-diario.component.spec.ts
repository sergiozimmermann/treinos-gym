/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTreinoDiarioComponent } from './card-treino-diario.component';

describe('CardTreinoDiarioComponent', () => {
  let component: CardTreinoDiarioComponent;
  let fixture: ComponentFixture<CardTreinoDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTreinoDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTreinoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
