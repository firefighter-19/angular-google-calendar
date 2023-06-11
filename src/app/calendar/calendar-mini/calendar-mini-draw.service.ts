import { Injectable } from '@angular/core';
import {
  BeginningOfTheWeekDates,
  CHRISTIANITY_WEEK,
  EndOfTheWeekDates,
  GREGORIAN_WEEK,
  MiddleOfTheMonthDates,
  MissingDates,
  WeekFormat,
} from './calendar-mini.utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarMiniDrawService {
  private date: Date = new Date();
  private week: string[] = GREGORIAN_WEEK;

  private drawnCalendar = new BehaviorSubject({});
  private readonly drawnCalendar$ = this.drawnCalendar.asObservable();

  set setDate(date: Date) {
    this.date = date;
  }

  set setWeekByFormat(format: WeekFormat) {
    this.week =
      format === WeekFormat.SUN_SUT ? GREGORIAN_WEEK : CHRISTIANITY_WEEK;
  }

  get getDrawnCalendar() {
    this.drawCalendar();
    return this.drawnCalendar$;
  }

  private drawCalendar() {
    const firstDayOfTheMonth = this.getFirstMonthDate(this.date);
    const lastDayOfTheMonth = this.getLastMonthDate(this.date);

    const firstDayOfTheMonthInWeek = this.getDayFromDate(firstDayOfTheMonth);
    const lastDayOfTheMonthInWeek = this.getDayFromDate(lastDayOfTheMonth);

    const indexOfFirstDayInAWeek = this.week.findIndex(
      (day) => day === firstDayOfTheMonthInWeek.toLowerCase(),
    );

    const indexOfLastDayInAWeek = this.week.findIndex(
      (day) => day === lastDayOfTheMonthInWeek.toLowerCase(),
    );

    const dates = this.getMissingWeekDates({
      firstDayOfTheMonth,
      indexOfFirstDayInAWeek,
      indexOfLastDayInAWeek,
      lastDayOfTheMonth,
      weekLength: this.week.length - 1,
    });

    const drawnCalendar = this.fillWeekWithDates(this.week, dates);

    // const sortedCalendar = this.sortCalendarAccordingToWeekType(drawnCalendar);
    // console.log('sortedCalendar ===========>: ', sortedCalendar);

    this.drawnCalendar.next(drawnCalendar);
  }

  private fillWeekWithDates(week: string[], dates: string[]) {
    let pointer = 0;
    return dates.reduce((weekAcc, curDate) => {
      if (week[pointer]) {
        if (weekAcc[week[pointer]]) {
          weekAcc[week[pointer]].push(curDate);
        } else {
          weekAcc[week[pointer]] = [curDate];
        }
      } else {
        pointer = 0;
        weekAcc[week[pointer]].push(curDate);
      }
      pointer++;
      return weekAcc;
    }, {} as { [key: string]: string[] });
  }

  // private sortCalendarAccordingToWeekType(calendar: {
  //   [key: string]: string[];
  // }) {
  //   const sortedWeek = new Map();
  //   this.week.forEach((day) => {
  //     sortedWeek.set(day, calendar[day]);
  //   });
  //   console.log('this.week ===========>: ', sortedWeek);
  //   console.log(
  //     'Object.fromEntries(sortedWeek) ===========>: ',
  //     Object.fromEntries(sortedWeek),
  //   );
  //   return Object.fromEntries(sortedWeek);
  // }

  private getMissingWeekDates({
    firstDayOfTheMonth,
    indexOfFirstDayInAWeek,
    indexOfLastDayInAWeek,
    lastDayOfTheMonth,
    weekLength,
  }: MissingDates) {
    const beginningOfTheWeekDates = this.getBeginningOfTheWeekDates({
      firstDayOfTheMonth,
      indexOfFirstDayInAWeek,
    });

    const endOfTheWeekDates = this.getEndOfTheWeekDates({
      indexOfLastDayInAWeek,
      lastDayOfTheMonth,
      weekLength,
    });

    const middleDates = this.getMiddleDates({
      firstDate: new Date(
        beginningOfTheWeekDates[beginningOfTheWeekDates.length - 1],
      ),
      endDate: new Date(endOfTheWeekDates[0]),
    });
    const monthDates = [
      ...beginningOfTheWeekDates,
      ...middleDates,
      ...endOfTheWeekDates,
    ];

    return monthDates;
  }

  private getBeginningOfTheWeekDates({
    firstDayOfTheMonth,
    indexOfFirstDayInAWeek,
  }: BeginningOfTheWeekDates) {
    const beginningOfTheWeekDates = [];

    for (let i = indexOfFirstDayInAWeek; i >= 0; i--) {
      const date = new Date(
        new Date(firstDayOfTheMonth.getTime()).setDate(
          firstDayOfTheMonth.getDate() - i,
        ),
      );
      beginningOfTheWeekDates.push(this.getFormattedDate(date));
    }
    return beginningOfTheWeekDates;
  }

  private getEndOfTheWeekDates({
    indexOfLastDayInAWeek,
    lastDayOfTheMonth,
    weekLength,
  }: EndOfTheWeekDates) {
    const endOfTheWeekDates = [];

    for (let i = weekLength; i >= indexOfLastDayInAWeek; i--) {
      const date = new Date(
        new Date(lastDayOfTheMonth.getTime()).setDate(
          lastDayOfTheMonth.getDate() + (weekLength - i),
        ),
      );
      endOfTheWeekDates.push(this.getFormattedDate(date));
    }
    return endOfTheWeekDates;
  }

  private getMiddleDates({
    firstDate,
    endDate,
  }: MiddleOfTheMonthDates): string[] {
    const middleDates: string[] = [];
    const year = firstDate.getFullYear();
    const month =
      firstDate.getMonth() + 1 < 10
        ? `0${firstDate.getMonth() + 1}`
        : firstDate.getMonth().toString;

    for (let i = firstDate.getDate() + 1; i < endDate.getDate(); i++) {
      const day = i < 10 ? `0${i}` : i.toString();
      const formattedTime = `${year}/${month}/${day}`;
      middleDates.push(formattedTime);
    }
    return middleDates;
  }

  private getFirstMonthDate(currentDate: Date): Date {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  }

  private getLastMonthDate(currentDate: Date): Date {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  }

  private getDayFromDate(date: Date, locale: string = 'en-EN'): string {
    return date.toLocaleDateString(locale, { weekday: 'short' });
  }

  private getFormattedDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth().toString;
    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();

    return `${year}/${month}/${day}`;
  }
}
