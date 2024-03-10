import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIGotIntoContentCreationThumbnailComponent } from './how-igot-into-content-creation-thumbnail.component';

describe('HowIGotIntoContentCreationThumbnailComponent', () => {
  let component: HowIGotIntoContentCreationThumbnailComponent;
  let fixture: ComponentFixture<HowIGotIntoContentCreationThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowIGotIntoContentCreationThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowIGotIntoContentCreationThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
