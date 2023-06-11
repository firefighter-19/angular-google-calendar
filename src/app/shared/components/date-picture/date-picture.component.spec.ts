import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePictureComponent } from './date-picture.component';

describe('DatePictureComponent', () => {
  let component: DatePictureComponent;
  let fixture: ComponentFixture<DatePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DatePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
