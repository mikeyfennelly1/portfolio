import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondGoodAndEvilComponent } from './beyondGoodAndEvil.component';

describe('BeyondGoodAndEvilComponent', () => {
  let component: BeyondGoodAndEvilComponent;
  let fixture: ComponentFixture<BeyondGoodAndEvilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondGoodAndEvilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeyondGoodAndEvilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
