import { computed, Injectable, OnInit, signal } from '@angular/core';
import { DateGeInterface } from '../types/date.georgian.interface';

@Injectable({
  providedIn: 'root',
})
export class GeorgianDateInputService implements OnInit {
  dateInGeorgian = signal<DateGeInterface>({ year: 0, month: 0, day: 0 });

  year = computed(() => this.dateInGeorgian().year);

  month = computed(() => this.dateInGeorgian().month);

  constructor() {
    this.updateDate({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    });
  }

  ngOnInit(): void {}

  updateDate(date: Partial<DateGeInterface>): void {
    this.dateInGeorgian.update((current) => ({
      ...current,
      ...date,
    }));
  }
}
