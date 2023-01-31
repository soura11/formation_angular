import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeintraComponent } from './demandeintra.component';

describe('DemandeintraComponent', () => {
  let component: DemandeintraComponent;
  let fixture: ComponentFixture<DemandeintraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeintraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeintraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
