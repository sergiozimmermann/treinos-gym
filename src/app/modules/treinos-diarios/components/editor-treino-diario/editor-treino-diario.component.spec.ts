/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditorTreinoDiarioComponent } from './editor-treino-diario.component';

describe('EditorTreinoDiarioComponent', () => {
  let component: EditorTreinoDiarioComponent;
  let fixture: ComponentFixture<EditorTreinoDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTreinoDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTreinoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
