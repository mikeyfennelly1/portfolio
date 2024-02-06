import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GavinGrantComponent } from './gavin-grant.component';

describe('GavinGrantComponent', () => {
  let component: GavinGrantComponent;
  let fixture: ComponentFixture<GavinGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GavinGrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GavinGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
