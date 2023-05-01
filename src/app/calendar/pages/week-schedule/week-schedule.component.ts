import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekScheduleComponent {}
