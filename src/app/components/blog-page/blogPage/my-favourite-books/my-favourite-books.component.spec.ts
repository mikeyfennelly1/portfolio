import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouriteBooksComponent } from './my-favourite-books.component';

describe('MyFavouriteBooksComponent', () => {
  let component: MyFavouriteBooksComponent;
  let fixture: ComponentFixture<MyFavouriteBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFavouriteBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFavouriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
