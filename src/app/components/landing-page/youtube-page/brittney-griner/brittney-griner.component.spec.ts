import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrittneyGrinerComponent } from './brittney-griner.component';

describe('BrittneyGrinerComponent', () => {
  let component: BrittneyGrinerComponent;
  let fixture: ComponentFixture<BrittneyGrinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrittneyGrinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrittneyGrinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
