import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerComponent {}
