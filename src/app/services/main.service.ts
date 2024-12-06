import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  language: string = '';

  title = signal<string>('');
}
