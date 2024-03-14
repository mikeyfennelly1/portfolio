import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIGotIntoContentCreationComponent } from './how-igot-into-content-creation.component';

describe('HowIGotIntoContentCreationComponent', () => {
  let component: HowIGotIntoContentCreationComponent;
  let fixture: ComponentFixture<HowIGotIntoContentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowIGotIntoContentCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowIGotIntoContentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
