import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTumorClassifierComponent } from './brainTumorClassifier.component';

describe('BrainTumorClassifierComponent', () => {
  let component: BrainTumorClassifierComponent;
  let fixture: ComponentFixture<BrainTumorClassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrainTumorClassifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrainTumorClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
