import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarMiniDrawService } from './calendar-mini-draw.service';
import { CalendarMini, WeekFormat } from './calendar-mini.utils';
import { Observable } from 'rxjs';
import { SplitDateToDayPipe } from 'src/app/shared/pipes/split-date-to-day.pipe';

@Component({
  selector: 'app-calendar-mini',
  standalone: true,
  imports: [CommonModule, SplitDateToDayPipe],
  templateUrl: './calendar-mini.component.html',
  styleUrls: ['./calendar-mini.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarMiniComponent implements OnInit {
  private readonly calendarMiniService = inject(CalendarMiniDrawService);
  readonly calendar$: Observable<CalendarMini> =
    this.calendarMiniService.getDrawnCalendar;

  @Input() currentDate: Date | null = null;

  ngOnInit(): void {
    // this.calendarMiniService.drawCalendar(new Date(), WeekFormat.SUN_SUT);
  }
  getPreviousMonth() {}

  getNextMonth() {}
}
