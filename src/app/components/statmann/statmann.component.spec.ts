import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatmannComponent } from './statmann.component';

describe('StatmannComponent', () => {
  let component: StatmannComponent;
  let fixture: ComponentFixture<StatmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatmannComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
