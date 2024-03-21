import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBoronLettersComponent } from './theBoronLetters.component';

describe('TheBoronLettersComponent', () => {
  let component: TheBoronLettersComponent;
  let fixture: ComponentFixture<TheBoronLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBoronLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBoronLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
