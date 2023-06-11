import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picture.component.html',
  styleUrls: ['./date-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePictureComponent {
  @Input() currentDate: number | null = null;
  // path: string = '';
  // ngOnInit(): void {
  //   this.path = `src/assets/images/calendar_10_2x.png`;
  // }
}
