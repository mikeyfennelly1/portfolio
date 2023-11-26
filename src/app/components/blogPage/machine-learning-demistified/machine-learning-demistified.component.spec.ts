import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningDemistifiedComponent } from './machine-learning-demistified.component';

describe('MachineLearningDemistifiedComponent', () => {
  let component: MachineLearningDemistifiedComponent;
  let fixture: ComponentFixture<MachineLearningDemistifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineLearningDemistifiedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineLearningDemistifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
