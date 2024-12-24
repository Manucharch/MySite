import { Component, HostListener, OnInit, output, signal } from '@angular/core';

import { GeorgianDateInputService } from '../../services/georgian-date-input.service';
import { DateGeInterface } from '../../types/date.georgian.interface';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-date-picker-ge',
  standalone: false,
  templateUrl: './date-picker-ge.component.html',
  styleUrl: './date-picker-ge.component.scss',
})
export class DatePickerGEComponent implements OnInit {
  dateString: string = '';

  dateInput: DateGeInterface = { year: 0, month: 0, day: 0 };

  isFolded: boolean = true;
  dateFromService = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  constructor(private service: GeorgianDateInputService) {}

  ngOnInit(): void {
    this.dateFromService = this.service.dateInGeorgian;

    this.dateInput = this.dateFromService();
  }

  selectAll(event: FocusEvent | MouseEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.select();
  }

  checkDateInput(date: DateGeInterface): boolean {
    if (date.day < 1 || date.day > 31) {
      return false;
    }

    if (date.month < 1 || date.month > 12) {
      return false;
    }

    return true;
  }

  updateDate(flag: string) {
    if (this.checkDateInput(this.dateInput)) {
      this.service.updateDate(this.dateInput);
    }
  }

  validateDay(dayInput: NgModel): boolean {
    if (dayInput.invalid && dayInput.touched) {
      this.dateInput.day = 0;

      return false;
    }

    return true;
  }

  getDatesFromCAlendar(event: string) {
    switch (event) {
      case 'year':
        this.dateInput.year = this.dateFromService().year;
        break;

      case 'month':
        this.dateInput.month = this.dateFromService().month;
        break;

      case 'day':
        this.dateInput.day = this.dateFromService().day;
        break;

      default:
        break;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    if (!clickedElement.closest('.calendar')) {
      this.isFolded = true;
    }
  }

  toggleCalendar(event: Event): void {
    event.stopPropagation();
    this.isFolded = !this.isFolded;
  }
}
