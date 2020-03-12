import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo02Component } from './exo02.component';

describe('Exo02Component', () => {
  let component: Exo02Component;
  let fixture: ComponentFixture<Exo02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
