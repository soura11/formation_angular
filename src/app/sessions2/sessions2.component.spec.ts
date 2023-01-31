import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessions2Component } from './sessions2.component';

describe('Sessions2Component', () => {
  let component: Sessions2Component;
  let fixture: ComponentFixture<Sessions2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sessions2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
