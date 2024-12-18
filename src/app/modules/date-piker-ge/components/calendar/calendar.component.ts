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
  showMainBord: boolean = true;
  showYearPad: boolean = false;
  showMonthPad: boolean = false;

  dateInGeorgian = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  yearsSignal = signal<number[]>([]);

  years: number[] = new Array(3000).fill(null).map((_, i) => i + 1);
  // year = signal<number>(0);

  // monthDays = signal<number[]>([]);

  calendarMonthDays = computed(() => {
    const { year, month } = this.dateInGeorgian();

    let length = new Date(Number(year), Number(month), 0).getDate();
    let firsDay = new Date(Number(year), Number(month) - 1, 1).getDay();
    let lastDay = new Date(Number(year), Number(month) - 1, length).getDay();

    let resp = new Array(new Date(year, month, 0).getDate())
      .fill(null)
      .map((_, i) => i + 1);

    switch (firsDay) {
      case 0:
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        break;

      case 2:
        resp.unshift(0);
        break;

      case 3:
        resp.unshift(0);
        resp.unshift(0);
        break;

      case 4:
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        break;

      case 5:
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        break;

      case 6:
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        resp.unshift(0);
        break;

      default:
        break;
    }

    switch (lastDay) {
      case 1:
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        break;

      case 2:
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        break;

      case 3:
        resp.push(0);
        resp.push(0);
        resp.push(0);
        resp.push(0);
        break;

      case 4:
        resp.push(0);
        resp.push(0);
        resp.push(0);
        break;

      case 5:
        resp.push(0);
        resp.push(0);

        break;

      case 6:
        resp.push(0);
        break;

      default:
        break;
    }

    return resp;
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
  }

  setYearsSignal(year: number): void {
    const arr = Array.from({ length: 20 }, (_, a) => a + year - 10);

    this.yearsSignal.set(arr);
  }

  showHideYearPad(year: number) {
    this.setYearsSignal(year);

    this.showYearPad = !this.showYearPad;
    this.showMonthPad = false;
  }

  showHideMonthPad() {
    this.showMonthPad = !this.showMonthPad;
    this.showYearPad = false;
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
    if (event != 0) {
      this.service.updateDate({ day: event });

      console.log(this.service.dateInGeorgian());
    }
  }

  incrementYear(flag: string): void {
    let year = this.service.dateInGeorgian().year;
    if (!this.showMonthPad && !this.showYearPad) {
      if (flag == 'forward') {
        this.setYear(Number(year) + 1);
      } else {
        this.setYear(Number(year) - 1);
      }
    } else if (this.showYearPad) {
      if (flag == 'forward') {
        this.setYear(Number(year) + 10);
        this.setYearsSignal(this.dateInGeorgian().year);
      } else {
        this.setYear(Number(year) - 10);
        this.setYearsSignal(this.dateInGeorgian().year);
      }
    } else if (this.showMonthPad) {
      // if (flag == 'forward') {
      //   this.setYear(Number(year) + 1);
      // } else {
      //   this.setYear(Number(year) - 1);
      // }
    }
  }
}
