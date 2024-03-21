import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElonMuskComponent } from './elonMusk.component';

describe('ElonMuskComponent', () => {
  let component: ElonMuskComponent;
  let fixture: ComponentFixture<ElonMuskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElonMuskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElonMuskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
