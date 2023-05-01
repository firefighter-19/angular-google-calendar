import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHeaderComponent {}
