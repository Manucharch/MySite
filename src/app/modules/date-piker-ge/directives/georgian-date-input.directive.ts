import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGeorgianDateInput]',
})
export class GeorgianDateInputDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const inputValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    let newValue = inputValue;

    if (newValue.length === 2 && !newValue.includes('/')) {
      newValue = `${newValue} /`;
    } else if (newValue.length === 4 && !newValue.includes('/', 3)) {
      newValue = `${newValue.slice(0, 2)} / ${newValue.slice(2)} / `;
    }

    if (newValue !== inputValue) {
      const inputElement = event.target as HTMLInputElement;
      inputElement.value = newValue;
    }
  }
}
