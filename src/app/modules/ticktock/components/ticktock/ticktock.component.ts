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
  showGamePad: boolean = false;

  gamestyle: string = 'computer';

  getShowChose(): void {
    this.showStart = false;
    this.showChose = true;
  }

  getShowGamePad(style: string): void {
    this.showChose = false;
    this.showGamePad = true;
    this.gamestyle = style;
  }
}
