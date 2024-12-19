import { Pipe, PipeTransform } from '@angular/core';
import { DateGeInterface } from '../types/date.georgian.interface';

@Pipe({
  name: 'georgianDateOutput',
})
export class GeorgianDateOutputPipe implements PipeTransform {
  transform(value: DateGeInterface): string {
    let monthies: string[] = [
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

    return `${value.day} ${monthies[value.month - 1]}, ${value.year}`;
  }
}
