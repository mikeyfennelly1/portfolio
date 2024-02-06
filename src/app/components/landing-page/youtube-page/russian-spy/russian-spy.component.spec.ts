import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianSpyComponent } from './russian-spy.component';

describe('RussianSpyComponent', () => {
  let component: RussianSpyComponent;
  let fixture: ComponentFixture<RussianSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RussianSpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RussianSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
