import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { BurgerComponent } from '../shared/components/burger/burger.component';
import { DatePictureComponent } from '../shared/components/date-picture/date-picture.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarHeaderComponent,
    BurgerComponent,
    DatePictureComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  currentDate: number = new Date().getDate();
}
