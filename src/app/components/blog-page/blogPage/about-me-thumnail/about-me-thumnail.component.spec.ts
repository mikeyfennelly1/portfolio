import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeThumbnailComponent } from './about-me-thumnail.component';

describe('AboutMeThumbnailComponent', () => {
  let component: AboutMeThumbnailComponent;
  let fixture: ComponentFixture<AboutMeThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
