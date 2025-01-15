import { Component } from '@angular/core';

@Component({
  selector: 'app-tictoc',
  standalone: false,
  templateUrl: './tictoc.component.html',
  styleUrl: './tictoc.component.scss',
})
export class TictocComponent {
  gameStarted: boolean = false;
  showGameBoard: boolean = false;
  showGameInfo: boolean = false;

  startGame(): void {
    this.gameStarted = true;
    this.showGameInfo = true;
  }

  getCloseInfo(): void {
    this.showGameBoard = true;
    this.gameStarted = true;
    this.showGameInfo = false;
  }
}
