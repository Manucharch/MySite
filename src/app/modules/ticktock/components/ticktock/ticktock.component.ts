import { Component, OnInit } from '@angular/core';
import { playerInterface } from '../../types/player.interface';
import { TicktockService } from '../../services/ticktock.service';

@Component({
  selector: 'app-ticktock',
  standalone: false,
  templateUrl: './ticktock.component.html',
  styleUrl: './ticktock.component.scss',
})
export class TicktockComponent implements OnInit {
  dimension: string[] = ['1', '2', '3'];

  winingLines: string[][] = [
    ['wr11', 'wr12', 'wr13'],
    ['wr21', 'wr22', 'wr23'],
    ['wr31', 'wr32', 'wr33'],
    ['wr11', 'wr21', 'wr31'],
    ['wr12', 'wr22', 'wr32'],
    ['wr13', 'wr23', 'wr33'],
    ['wr11', 'wr22', 'wr33'],
    ['wr13', 'wr22', 'wr31'],
  ];

  player1: playerInterface = {
    id: '',
    icon: '',
    name: '',
    placedIcons: [],
  };

  player2: playerInterface = {
    id: '',
    icon: '',
    name: '',
    placedIcons: [],
  };

  activePlayer!: playerInterface;

  gameStarted: boolean = false;

  startNewGame: boolean = false;

  constructor(private service: TicktockService) {}

  ngOnInit(): void {
    this.service.activePlayer.set(this.player1);
  }

  startGame(): void {
    this.clearGamePad();
    this.startNewGame = true;
  }

  getPlayerInfo(player: playerInterface): void {
    this.player1 = player;

    this.player2 = {
      id: '2',
      icon: this.player1.icon === 'X' ? 'O' : 'X',
      name: 'Player 2',
      placedIcons: [],
    };

    this.service.activePlayer.set(this.player2);
  }

  makeMove(row: string, column: string): void {
    if (!this.startNewGame) {
      return;
    }

    if (!this.gameStarted) {
      console.log(`${row}${column}`);
      const element = document.getElementById(`${row}${column}`) as HTMLElement;
      if (element) {
        element.style.display = 'flex';
      }
    }

    if (this.gameStarted) {
      const element = document.getElementById(
        `wr${row}${column}svg`
      ) as HTMLElement;

      element.innerHTML =
        this.service.activePlayer().icon === 'X'
          ? this.service.svgStringX
          : this.service.svgStringO;
    }

    this.service.activePlayer().id == '1'
      ? this.player1.placedIcons.push(`wr${row}${column}`)
      : this.player2.placedIcons.push(`wr${row}${column}`);

    if (this.checkWinner(this.service.activePlayer())) {
      for (let i = 1; i <= this.dimension.length; i++) {
        for (let j = 1; j <= this.dimension.length; j++) {
          let id = `wr${i}${j}svg`;

          let element = document.getElementById(id) as HTMLElement;

          element.innerHTML =
            this.service.activePlayer().icon === 'X'
              ? this.service.svgStringX
              : this.service.svgStringO;
        }
      }

      // let els = document.querySelectorAll('.pad');

      // els.forEach((el) => {
      //   el.innerHTML =
      //     this.service.activePlayer().icon === 'X'
      //       ? this.service.svgStringX
      //       : this.service.svgStringO;
      // });

      this.startNewGame = false;
    }

    this.switchPlayers();

    console.log('active player - ' + this.service.activePlayer().name);

    console.log('player1 - ' + JSON.stringify(this.player1));
    console.log('player2 - ' + JSON.stringify(this.player2));

    this.gameStarted = true;
  }

  switchPlayers() {
    this.service.activePlayer.set(
      this.service.activePlayer() === this.player1 ? this.player2 : this.player1
    );
  }

  checkWinner(player: playerInterface): boolean {
    let result = false;

    if (player.placedIcons.length >= 3) {
      this.winingLines.forEach((line) => {
        if (line.every((el) => player.placedIcons.includes(el))) {
          result = true;
        }
      });
    }

    return result;
  }

  clearGamePad(): void {
    for (let i = 1; i <= this.dimension.length; i++) {
      for (let j = 1; j <= this.dimension.length; j++) {
        let id = `wr${i}${j}svg`;

        let element = document.getElementById(id) as HTMLElement;

        element.innerHTML = '';
      }
    }

    this.player1 = {
      id: '',
      icon: '',
      name: '',
      placedIcons: [],
    };
    this.player2 = {
      id: '',
      icon: '',
      name: '',
      placedIcons: [],
    };

    this.gameStarted = false;

    this.gameStarted = false;
  }
}
