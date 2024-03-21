import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteveJobsComponent } from './steveJobs.component';

describe('SteveJobsComponent', () => {
  let component: SteveJobsComponent;
  let fixture: ComponentFixture<SteveJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteveJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
