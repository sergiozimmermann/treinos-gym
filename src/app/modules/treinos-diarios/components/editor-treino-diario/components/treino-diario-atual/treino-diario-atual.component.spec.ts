/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreinoDiarioAtualComponent } from './treino-diario-atual.component';

describe('TreinoDiarioAtualComponent', () => {
  let component: TreinoDiarioAtualComponent;
  let fixture: ComponentFixture<TreinoDiarioAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoDiarioAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoDiarioAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
