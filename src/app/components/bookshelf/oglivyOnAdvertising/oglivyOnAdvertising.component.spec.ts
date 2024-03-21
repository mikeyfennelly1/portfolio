import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglivyOnAdvertisingComponent } from './oglivyOnAdvertising.component';

describe('OglivyOnAdvertisingComponent', () => {
  let component: OglivyOnAdvertisingComponent;
  let fixture: ComponentFixture<OglivyOnAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OglivyOnAdvertisingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OglivyOnAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
