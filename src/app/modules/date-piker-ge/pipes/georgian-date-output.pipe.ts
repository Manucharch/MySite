import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'georgianDateOutput',
})
export class GeorgianDateOutputPipe implements PipeTransform {
  transform(value: string): string {
    let treamedString = value.replace(/ /g, '');

    // Regular expression to match the Georgian date format
    const pattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    // Check if the date string matches the pattern
    if (!pattern.test(treamedString)) {
      return 'გთხოვთ სწორად მიუთითოთ თარიღი';
    }

    // Extract day, month, and year from the date string
    const [day, month, year] = treamedString.split('/').map(Number);

    // Check for valid day and month values
    if (month < 1 || month > 12) {
      return 'გთხოვთ თვეებისთვის გამოიყენოთ ფორმატი: 01, 02, ... 11, 12';
    }

    const daysInMonth = this.getDaysInMonth(month, year);
    if (day < 1 || day > daysInMonth) {
      return 'გთხოვთ დღეებისთვის გამოიყენოთ ფორმატი: 01, 02, 03, 04, ... 29, 30, 31';
    }

    return `${day}, ${month}, ${year}`;
  }

  private getDaysInMonth(month: number, year: number): number {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 2:
        return isLeapYear ? 29 : 28;
      default:
        return 30;
    }
  }
}
