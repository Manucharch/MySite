import {
  Component,
  computed,
  Input,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { GeorgianDateInputService } from '../../services/georgian-date-input.service';
import { DateGeInterface } from '../../types/date.georgian.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  dateInGeorgian = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  years: number[] = new Array(3000).fill(null).map((_, i) => i + 1);
  // year = signal<number>(0);

  // monthDays = signal<number[]>([]);

  calendarMonthDays = computed(() => {
    const { year, month } = this.dateInGeorgian();
    return new Array(new Date(year, month, 0).getDate())
      .fill(null)
      .map((_, i) => i + 1);
  });

  monthies: string[] = [
    'იანვარი',
    'თებერვალი',
    'მარტი',
    'აპრილი',
    'მაისი',
    'ივნისი',
    'ივლისი',
    'აგვისტო',
    'სექტემბერი',
    'ოქტომბერი',
    'ნოემბერი',
    'დეკემბერი',
  ];
  // month = signal<number>(0);

  constructor(private service: GeorgianDateInputService) {}

  ngOnInit(): void {
    this.dateInGeorgian = this.service.dateInGeorgian;
    // this.year.set(this.service.year());
    // this.month.set(this.service.month());
  }

  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  setYear(year: number): void {
    this.service.updateDate({
      year: year,
    });

    this.calendarMonthDays();
    console.log(this.service.dateInGeorgian());
  }

  setMonth(event: number): void {
    this.service.updateDate({ month: event });

    this.calendarMonthDays();

    console.log(this.service.dateInGeorgian());
  }

  setDay(event: number): void {
    this.service.updateDate({ day: event });

    console.log(this.service.dateInGeorgian());
  }
}
