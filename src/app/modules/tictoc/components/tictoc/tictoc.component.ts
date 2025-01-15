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

  getCloseInfo(flag: string): void {
    if (flag == 'start') {
      this.gameStarted = true;

      this.showGameBoard = true;
    } else {
      this.gameStarted = false;
    }
    this.showGameInfo = false;
  }

  getQuitFromBoard(): void {
    this.gameStarted = false;
    this.showGameBoard = false;
  }

  getGoBack() {}
}
