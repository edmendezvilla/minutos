import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codigo2Component } from './codigo2.component';

describe('Codigo2Component', () => {
  let component: Codigo2Component;
  let fixture: ComponentFixture<Codigo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codigo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codigo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
