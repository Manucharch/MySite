import { Component, OnInit, signal } from '@angular/core';
import { GeorgianDateInputService } from '../../services/georgian-date-input.service';
import { DateGeInterface } from '../../types/date.georgian.interface';

@Component({
  selector: 'app-date-picker-ge',
  standalone: false,
  templateUrl: './date-picker-ge.component.html',
  styleUrl: './date-picker-ge.component.scss',
})
export class DatePickerGEComponent implements OnInit {
  date: string = '';
  isFolded: boolean = true;
  dateFromService = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  constructor(private service: GeorgianDateInputService) {}

  ngOnInit(): void {
    this.dateFromService = this.service.dateInGeorgian;
    // this.date =
  }

  setDate(date: string): void {
    const pattern: RegExp = /^\d{2}\/\d{2}\/\d{4}$/;
    if (pattern.test(date.replace(/ /g, ''))) {
      let year = Number(date.split('/')[2]);
      let month = Number(date.split('/')[1]);
      let day = Number(date.split('/')[0]);

      this.service.updateDate({ year, month, day });
    }

    console.log('from servise -');
    console.log(this.service.dateInGeorgian());
  }

  toggleCalendar(): void {
    this.isFolded = !this.isFolded;
  }
}
