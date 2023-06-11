import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDatePipe',
  standalone: true,
  pure: true,
})
export class SplitDateToDayPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const [year, month, day] = value.split('/');
    return day;
  }
}
