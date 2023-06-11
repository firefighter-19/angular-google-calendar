import { TestBed } from '@angular/core/testing';

import { CalendarMiniDrawService } from './calendar-mini-draw.service';

describe('CalendarMiniService', () => {
  let service: CalendarMiniDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarMiniDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
