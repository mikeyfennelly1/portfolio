import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkingFastAndSlowComponent } from './thinkingFastAndSlow.component';

describe('ThinkingFastAndSlowComponent', () => {
  let component: ThinkingFastAndSlowComponent;
  let fixture: ComponentFixture<ThinkingFastAndSlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThinkingFastAndSlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThinkingFastAndSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
