import { Component, OnInit, output } from '@angular/core';
import { TictocService } from '../../services/tictoc.service';

@Component({
  selector: 'app-game-board',
  standalone: false,
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent implements OnInit {
  outpuQuiteGame = output<void>();

  player1: any;
  player2: any;

  constructor(private service: TictocService) {}

  ngOnInit(): void {
    this.player1 = this.service.player1;
    this.player2 = this.service.player2;
  }

  getQuiteGame(): void {
    this.outpuQuiteGame.emit();
  }

  getGoBack(): void {}
}
