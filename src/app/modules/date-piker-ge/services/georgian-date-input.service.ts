import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeorgianDateInputService {
  getSuggestions(inputValue: string): Observable<string[]> {
    // Implement your logic to generate suggestions based on the inputValue
    // For example:
    // 1. Fetch data from a server (if applicable)
    // 2. Use a pre-defined list of dates
    // 3. Generate suggestions based on common date patterns

    // Example: Simple suggestion logic (replace with your actual implementation)
    const suggestions: string[] = [];

    if (inputValue.length >= 2) {
      suggestions.push(`${inputValue}01`); // Suggest day 1st of the month
      suggestions.push(`${inputValue}15`); // Suggest day 15th of the month
    }

    if (inputValue.length >= 2) {
      suggestions.push(`${inputValue}01`); // Suggest day 1st of the month
      suggestions.push(`${inputValue}15`); // Suggest day 15th of the month
    }
    return of(suggestions);
  }
}
