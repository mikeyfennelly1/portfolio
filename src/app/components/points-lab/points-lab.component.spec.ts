import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsLabComponent } from './points-lab.component';

describe('PointsLabComponent', () => {
  let component: PointsLabComponent;
  let fixture: ComponentFixture<PointsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
