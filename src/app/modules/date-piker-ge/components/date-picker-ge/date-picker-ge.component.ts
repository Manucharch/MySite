import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker-ge',
  standalone: false,
  templateUrl: './date-picker-ge.component.html',
  styleUrl: './date-picker-ge.component.scss',
})
export class DatePickerGEComponent {
  date: string = '';
  showCalendar: boolean = false;

  setDate(date: string): void {
    console.log(date);
  }

  toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }
}
