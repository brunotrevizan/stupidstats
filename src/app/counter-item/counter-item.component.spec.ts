/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterItemComponent } from './counter-item.component';

describe('CounterItemComponent', () => {
  let component: CounterItemComponent;
  let fixture: ComponentFixture<CounterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
