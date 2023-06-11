export enum WeekFormat {
  SUN_SUT = 'sundayToSaturday',
  MON_SUN = 'mondayToSunday',
}

export const GREGORIAN_WEEK: string[] = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sut',
];
export const CHRISTIANITY_WEEK: string[] = [
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sut',
  'sun',
];

export type MissingDates = BeginningOfTheWeekDates & EndOfTheWeekDates;

export interface CalendarMini {
  [key: string]: string[];
}

export interface BeginningOfTheWeekDates {
  indexOfFirstDayInAWeek: number;
  firstDayOfTheMonth: Date;
}

export interface EndOfTheWeekDates {
  indexOfLastDayInAWeek: number;
  lastDayOfTheMonth: Date;
  weekLength: number;
}

export interface MiddleOfTheMonthDates {
  firstDate: Date;
  endDate: Date;
}
