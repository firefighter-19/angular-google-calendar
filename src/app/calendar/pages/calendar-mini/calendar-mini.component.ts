import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-mini',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-mini.component.html',
  styleUrls: ['./calendar-mini.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarMiniComponent {

}
