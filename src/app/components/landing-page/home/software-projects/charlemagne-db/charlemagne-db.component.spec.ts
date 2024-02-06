import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlemagneDBComponent } from './charlemagne-db.component';

describe('CharlemagneDBComponent', () => {
  let component: CharlemagneDBComponent;
  let fixture: ComponentFixture<CharlemagneDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharlemagneDBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharlemagneDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
