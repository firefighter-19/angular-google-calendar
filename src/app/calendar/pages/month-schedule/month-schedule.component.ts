import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-schedule.component.html',
  styleUrls: ['./month-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthScheduleComponent {}
