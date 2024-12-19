import {
  Component,
  computed,
  HostListener,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeorgianDateInputService } from '../../services/georgian-date-input.service';
import { DateGeInterface } from '../../types/date.georgian.interface';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  showYearPad: boolean = false;
  showMonthPad: boolean = false;

  dateFromService = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  yearsSignal = signal<number[]>([]);

  closeCalendarOutput = output<void>();

  constructor(private service: GeorgianDateInputService) {}

  ngOnInit(): void {
    this.dateFromService = this.service.dateInGeorgian;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    if (!clickedElement.closest('.calendar')) {
      this.showMonthPad = false;
      this.showYearPad = false;
    }
  }

  calendarMonthDays = computed(() => {
    const { year, month } = this.dateFromService();

    let length = new Date(Number(year), Number(month), 0).getDate();
    let firsDay = new Date(Number(year), Number(month) - 1, 1).getDay();
    let lastDay = new Date(Number(year), Number(month) - 1, length).getDay();

    let resp = new Array(new Date(year, month, 0).getDate())
      .fill(null)
      .map((_, i) => i + 1);

    switch (firsDay) {
      case 0:
        for (let index = 0; index < 6; index++) {
          resp.unshift(0);
        }
        break;

      case 2:
        resp.unshift(0);
        break;

      case 3:
        for (let index = 0; index < 2; index++) {
          resp.unshift(0);
        }
        break;

      case 4:
        for (let index = 0; index < 3; index++) {
          resp.unshift(0);
        }
        break;

      case 5:
        for (let index = 0; index < 4; index++) {
          resp.unshift(0);
        }
        break;

      case 6:
        for (let index = 0; index < 5; index++) {
          resp.unshift(0);
        }
        break;

      default:
        break;
    }

    switch (lastDay) {
      case 1:
        for (let index = 0; index < 6; index++) {
          resp.push(0);
        }
        break;

      case 2:
        for (let index = 0; index < 5; index++) {
          resp.push(0);
        }
        break;

      case 3:
        for (let index = 0; index < 4; index++) {
          resp.push(0);
        }
        break;

      case 4:
        for (let index = 0; index < 3; index++) {
          resp.push(0);
        }
        break;

      case 5:
        for (let index = 0; index < 2; index++) {
          resp.push(0);
        }

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
    year = Number(year);
    this.service.updateDate({
      year: year,
    });

    this.calendarMonthDays();
  }

  setMonth(event: any): void {
    event = Number(event);
    this.service.updateDate({ month: event });

    this.calendarMonthDays();
  }

  setDay(event: number): void {
    if (event != 0) {
      this.service.updateDate({ day: event });

      this.closeCalendarOutput.emit();
    }
  }

  incrementYear(flag: string): void {
    let year = this.service.dateInGeorgian().year;
    if (this.showYearPad) {
      if (flag == 'forward') {
        this.setYear(Number(year) + 10);
        this.setYearsSignal(this.dateFromService().year);
      } else {
        this.setYear(Number(year) - 10);
        this.setYearsSignal(this.dateFromService().year);
      }
    } else {
      if (flag == 'forward') {
        this.setYear(Number(year) + 1);
      } else {
        this.setYear(Number(year) - 1);
      }
    }
  }
}
