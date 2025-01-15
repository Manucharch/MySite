import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  backOutput = output<string>();
  quiteOutput = output<void>();

  buttonTitle = input<string>('Back');

  quiteGame(): void {
    this.quiteOutput.emit();
  }

  goBack(flag: string): void {
    this.backOutput.emit(flag);
  }
}
