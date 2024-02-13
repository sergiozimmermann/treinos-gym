/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPresetComponent } from './card-preset.component';

describe('CardPresetComponent', () => {
  let component: CardPresetComponent;
  let fixture: ComponentFixture<CardPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
