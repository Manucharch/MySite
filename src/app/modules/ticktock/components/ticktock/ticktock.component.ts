import { Component } from '@angular/core';

@Component({
  selector: 'app-ticktock',
  standalone: false,
  templateUrl: './ticktock.component.html',
  styleUrl: './ticktock.component.scss',
})
export class TicktockComponent {
  showStart: boolean = true;
  showChose: boolean = false;
  showNameIcon: boolean = false;
  showGamePad: boolean = false;

  gamestyle: string = '';

  getShowChose(): void {
    this.showStart = false;
    this.showChose = true;
  }

  getShowNameIcon(style: string): void {
    this.showChose = false;
    this.showNameIcon = true;
    this.gamestyle = style;
  }

  getShowGamePad() {
    this.showNameIcon = false;
    this.showGamePad = true;
  }
}
