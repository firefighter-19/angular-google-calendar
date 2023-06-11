import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayScheduleComponent {}
